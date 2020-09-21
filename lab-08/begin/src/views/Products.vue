<template>
  <div>
    <div class="container">
      <div class="products">
        <h2>Villain Products</h2>
        <table class="products">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>&nbsp;</th>
          </tr>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ '$' + product.price.toFixed(2) }}</td>
            <td class="buy">
              <button @click="addToCartAction(product)">Buy</button>
            </td>
          </tr>
        </table>
      </div>
      <Cart class="cart" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cart from '@/components/Cart.vue';
import { Action, State } from 'vuex-class';
import { Product } from '@/models/Product';

@Component({
  components: { Cart },
})
export default class Products extends Vue {

  created(): void {
    //this.getProductsAction();
  }

  // get products(): Product[] {
  //   return this.$store.state.products;
  // }
}
</script>

<style scoped>
.buy {
  text-align: center;
}

.container {
  display: grid;
  grid-template-columns: [products] 47.5% [spacer] 5% [cart] 47.5%;
}

.products {
  grid-column: products;
}

.cart {
  grid-column: cart;
  justify-self: start;
}
</style>