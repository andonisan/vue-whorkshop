import { CartProduct } from '@/models/CArt';
import { BaseUrl } from '@/models/constants';
import { Product } from '@/models/Product';
import Vue from 'vue'
import Vuex from 'vuex'

export interface State {
  cart: Array<CartProduct>;
  products: Array<Product>;
}

Vue.use(Vuex)
export default new Vuex.Store<State>({
  state: {
    cart: Array<CartProduct>(),
    products: Array<Product>()
  },
  mutations: {
    initialiseStore(state) {
      var store = localStorage.getItem('store');
      if (store) {
         this.replaceState(
					Object.assign(state, JSON.parse(store))
				);;
      }
    },
    addProduct(state, product: Product) {
      state.products.push(product);
    },
    addToCart(state, product: Product) {
      const itemIndex = state.cart.findIndex(item => item.id === product.id);
      if (itemIndex === -1) {
        state.cart.push({ ...product, quantity: 1, total: product.price })
      } else {
        let cartItem = state.cart[itemIndex];
        cartItem.quantity++;
        cartItem.total = cartItem.price * cartItem.quantity;
      }
      localStorage.setItem('store', JSON.stringify(state));
    },
    removeFromCart(state, item: CartProduct) {
      const itemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);
      state.cart.splice(itemIndex, 1);
    }
  },
  actions: {
    initialiseStore({ commit }) {
      commit('initialiseStore');
    },
    addToCartAction({ commit }, product) {
      commit('addToCart', product);
    },
    getProductsAction({ commit, state }) {
      if (!state.products.length) {
        fetch(BaseUrl + 'products')
          .then(res => res.json())
          .then(products => {
            for (let product of products) {
              commit('addProduct', {
                id: product.id,
                name: product.name,
                price: product.price
              });
            }
          });
      }
    },
    removeFromCartAction({ commit }, item) {
      commit('removeFromCart', item);
    }
  },
  getters: {
    cartTotal: (state) => {
      let total = 0;
      for (let item of state.cart) {
        total += item.price * item.quantity;
      }
      return total;
    },
    products: (state) => {
      return state.products;
    }
  },
  modules: {
  }
})
