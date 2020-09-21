<template>
  <div>
    <h2>Hero</h2>
    <input v-model="hero.name" type="text" @keyup.enter="upperCaseTheName" />
    <p>Hello {{ hero.name }}.</p>
    <p>Your id is {{ hero.id }} and your description is "{{ hero.description }}"</p>
    <button @click="reverseName">Reverse</button>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Hero } from '../models/hero';

@Component
export default class Heroes extends Vue {
  private hero: Hero;

  constructor() {
    super();
    this.hero = {
      id: 101,
      name: 'Batman',
      description: 'el hombre murcielago',
    };
  }

  public reverseName(): void {
    this.hero.name = [...this.hero.name].reverse().join('');
  }

  private upperCaseTheName(): void {
    this.hero.name = this.hero.name.toUpperCase();
  }
}
</script>

<style scoped lang="scss">
</style>