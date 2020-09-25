<template>
  <div>
    <h2>Orders for Villain {{ villainId }}</h2>
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.product }}</td>
        <td>{{ '$' + order.price.toFixed(2) }}</td>
        <td>{{ order.quantity }}</td>
        <td>{{ '$' + total(order.price, order.quantity) }}</td>
      </tr>
    </table>
    <br />
    <!-- <router-link :to="{ name: 'villains' }">View Villains</router-link> -->
    <button @click="navigate">View Villains</button>
  </div>
</template>

<script lang ="ts">
import { Component, Vue } from 'vue-property-decorator';
import Order from '@/models/order';

@Component
export default class OrdersList extends Vue {
  private orders: Order[] = [
    { id: 1, product: 'Blow torch', price: 399.99, quantity: 1 },
    { id: 2, product: 'Hammer ', price: 59.99, quantity: 4 },
    { id: 3, product: 'TV', price: 899.99, quantity: 2 },
    { id: 4, product: 'Surfboard', price: 679.0, quantity: 1 },
  ] as Order[];

  get villainId(): string {
    return this.$route.params.id;
  }

  total(price: number, quantity: number): string {
    return (quantity * price).toFixed(2);
  }

  navigate() {
    this.$router.back();
  }
}
</script>
