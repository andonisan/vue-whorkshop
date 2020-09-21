<template>
  <div>
    <div class="section content-title-group">
      <h2 class="title">Heroes</h2>
      <div class="columns is-multiline is-variable">
        <div class="column is-8" v-if="heroes">
          <ul v-if="!isHeroSelected">
            <li v-for="hero in heroes" :key="hero.id">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div :key="hero.name" class="name">{{ hero.firstName }} {{ hero.lastName }}</div>
                    <div class="description">{{ hero.description }}</div>
                  </div>
                </div>
                <footer class="card-footer">
                  <button class="link card-footer-item save-button" @click="selectHero(hero)">
                    <i class="fas fa-check"></i>
                    <span>Select</span>
                  </button>
                </footer>
              </div>
            </li>
          </ul>
          <HeroDetail
            :hero="selectedHero"
            @save="saveHero"
            @cancel="unselectHero"
            v-if="isHeroSelected"
          />
          <div class="notification is-info" v-show="message">{{ message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Hero } from '@/models/hero';
import HeroDetail from '@/components/HeroDetail.vue';
import { IHeroService, HeroService } from '@/services/HeroService';

@Component({
  components: { HeroDetail },
})
export default class Heroes extends Vue {
  public heroes: Hero[] = [];
  public selectedHero: Hero = {} as Hero;
  private message = '';
  private heroService: IHeroService;

  public constructor() {
    super();
    this.heroService = new HeroService();
  }

  public created() {
    this.loadHeroes();
  }

  get isHeroSelected(): boolean {
    return !!this.selectedHero.id;
  }

  async loadHeroes() {
    this.heroes = [];
    this.message = 'getting the heroes, please be patient';
    this.heroes = await this.getHeroes();
    this.message = '';
  }

  public selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
  async getHeroes(): Promise<Hero[]> {
    return await this.heroService.getHeroes();
  }

  saveHero(hero: Hero) {
    this.selectedHero = {} as Hero;
    const index = this.heroes.findIndex((h) => h.id === hero.id);
    this.heroes.splice(index, 1, hero);
    this.heroes = [...this.heroes];
  }

  unselectHero() {
    this.selectedHero = {} as Hero;
  }
}
</script>

<style scoped lang="scss"></style>
