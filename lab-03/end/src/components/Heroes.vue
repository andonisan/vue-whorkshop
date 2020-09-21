<template>
  <div>
    <h2>Hero</h2>
    <ul>
      <li
        v-for="hero in heroes"
        :key="hero.id"
        @click="selectHero(hero)"
        :class="{highlight: selectedHero===hero}"
      >{{ hero.name }}</li>
    </ul>
    <div v-if="selectedHero.name">You selected {{ selectedHero.name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Hero } from '../models/hero';

@Component
export default class Heroes extends Vue {
  private heroes: Hero[];
  public selectedHero: Hero = {} as Hero;

  constructor() {
    super();
    this.heroes = [
      { id: 10, name: 'Batman', description: '' },
      { id: 20, name: 'Superman', description: '' },
      { id: 30, name: 'Ironman', description: '' },
    ];
  }
  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
</script>

<style scoped lang="scss">
li {
  list-style: none;
  width: 200px;
  cursor: pointer;

  .highlight {
    background-color: yellow;
  }
}
</style>