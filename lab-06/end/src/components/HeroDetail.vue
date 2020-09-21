<template>
  <div>
    <div class="card edit-detail">
      <header class="card-header">
        <p class="card-header-title">{{ fullName }}</p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="field">
            <label class="label" for="id">id</label>
            <label class="input" name="id" readonly>{{ clonedHero.id }}</label>
          </div>
          <div class="field">
            <label class="label" for="firstName">first name</label>
            <input class="input" name="firstName" type="text" v-model="clonedHero.firstName" />
          </div>
          <div class="field">
            <label class="label" for="lastName">last name</label>
            <input class="input" name="lastName" v-model="clonedHero.lastName" />
          </div>
          <div class="field">
            <label class="label" for="description">description</label>
            <input class="input" name="description" type="text" v-model="clonedHero.description" />
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <button class="link card-footer-item cancel-button" @click="cancelHero()">
          <i class="fas fa-undo"></i>
          <span>Cancel</span>
        </button>
        <button class="link card-footer-item save-button" @click="saveHero()">
          <i class="fas fa-save"></i>
          <span>Save</span>
        </button>
      </footer>
    </div>
    <div class="notification is-info" v-show="message">{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Hero } from '@/models/hero';
import { IHeroService, HeroService } from '@/services/HeroService';

@Component
export default class HeroDetails extends Vue {
  @Prop({ required: false, default: false })
  hero!: Hero;
  private heroService: IHeroService;
  private message = '';

  public constructor() {
    super();
    this.heroService = new HeroService();
  }

  public get fullName(): string {
    return `${this.hero.firstName} ${this.hero.lastName}`;
  }

  get clonedHero(): Hero {
    return this.hero;
  }

  cancelHero() {
    this.$emit('cancel');
  }
  async saveHero() {
    await this.heroService.updateHero(this.clonedHero);
    this.$emit('save', this.clonedHero);
  }
}
</script>

<style scoped></style>
