<template>
  <div class="cart">
    <h2>Cart</h2>
    <div v-if="cart.length">
      <table>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
          <th>&nbsp;</th>
        </tr>
        <tr v-for="item in cart" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ '$' + item.price.toFixed(2) }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ '$' + item.total.toFixed(2) }}</td>
          <td>
            <button @click="removeFromCartAction(item)">X</button>
          </td>
        </tr>
        <tr class="cartTotalRow">
          <td colspan="4" class="cartTotal">{{ '$' + cartTotal.toFixed(2) }}</td>
          <td>&nbsp;</td>
        </tr>
      </table>
      <br />
      <router-link to="/purchased">Place Order</router-link>
    </div>
    <div v-if="!cart.length">Cart is empty</div>
  </div>
</template>

<script lang="ts">
import { mapState, mapGetters, mapActions } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter, State } from 'vuex-class';
import { CartProduct } from '@/models/Cart';

@Component({
  // computed: {
  //   ...mapGetters(['cartTotal']),
  //   ...mapState(['cart']),
  // },
  // methods: {
  //   ...mapActions(['removeFromCartAction']),
  // },
})
export default class Cart extends Vue {

 @Action('removeFromCartAction') private removeFromCartAction!:() => Promise<void>;
 @State('cart') protected cart!:CartProduct[];
 @Getter('cartTotal') protected cartTotal!:number;

}
</script>

<style scoped>
.cartTotalRow {
  background-color: #ccc;
}
.cartTotal {
  text-align: right;
}
</style>