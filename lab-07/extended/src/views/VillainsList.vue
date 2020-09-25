<template>
  <div>
    <h2>Villains</h2>
    <input type="text" v-model="filter" placeholder="Filter villains" @change="updateUrl" />

    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Orders</th>
      </tr>
      <tr v-for="v in villainsFiltered" :key="v.id">
        <td>{{ v.name }}</td>
        <td>{{ v.description }}</td>
        <td>
          <router-link :to="{ name: 'orders', params: { id: v.id }}">View Orders</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Villain from '@/models/villain';

@Component
export default class VillainsList extends Vue {
  private villains: Villain[] = [
    { id: 1, name: 'Cape Killer', description: 'Hater of capes' },
    { id: 2, name: 'Wave Curler', description: 'Controls water' },
    { id: 3, name: 'Ted', description: 'Just a bad guy' },
    { id: 4, name: 'Kelp Crusher', description: 'Destroys the sea' },
  ] as Villain[];

  protected filter: string = '';

  created(): void {
    this.filter = (this.$route.query['filter'] || '') as string;
  }

  get villainsFiltered(): Villain[] {
    if (this.filter.length > 0) {
      return this.villains.filter((o) => o.name.includes(this.filter));
    }
    return this.villains;
  }

  updateUrl(): void {
    this.$router.replace({ name: 'villains', query: { filter: this.filter } });
  }
}
</script>
