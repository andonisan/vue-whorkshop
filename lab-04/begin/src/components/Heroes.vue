<template>
  <div>
    <div class="section content-title-group">
      <h2 class="title">Hero</h2>
      <div class="columns is-multiline is-variable">
        <div class="column is-8">
          <div class="card edit-detail" v-if="hero && hero.id">
            <header class="card-header">
              <p class="card-header-title">TITLE</p>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="field">
                  <label class="label" for="id">id</label>
                  <label class="input" name="id" readonly>{{hero.id}}</label>
                </div>
                <div class="field">
                  <label class="label" for="firstName">first name</label>
                  <input class="input" name="firstName" type="text" v-model="hero.firstName">
                </div>
                <div class="field">
                  <label class="label" for="lastName">last name</label>
                  <input class="input" name="lastName" v-model="hero.lastName">
                </div>
                <div class="field">
                  <label class="label" for="description">description</label>
                  <input class="input" name="description" type="text" v-model="hero.description">
                </div>
                <div class="field">
                  <label class="label" for="capeCounter">cape counter</label>
                  <input class="input" name="capeCounter" type="number" v-model="hero.capeCounter">
                </div>
                <div class="field">
                  <label class="label" for="capeMessage">cape message</label>
                  <label class="input" name="capeMessage">{{capeMessage}}</label>
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
          <div class="notification is-info" v-show="message">{{message}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Hero } from '../models/hero';

@Component
export default class Heroes extends Vue {
  private hero: Hero = {} as Hero;
  private message = '';
  private capeMessage = '';

  cancelHero() {
    this.loadHero();
  }

  async loadHero() {
    this.hero = {} as Hero;
    this.message = 'getting the hero, please be patient';
    this.hero = await this.getHero();
    this.message = '';
  }

  handleTheCapes(newValue: number) {
    switch (newValue) {
      case 0:
        this.capeMessage = 'Where is my cape?';
        break;
      case 1:
        this.capeMessage = 'One is all I need';
        break;
      case 2:
        this.capeMessage = 'Alway have a spare';
        break;
      default:
        this.capeMessage = 'You can never have enough capes';
        break;
    }
  }

  saveHero() {
    alert('Save!');
  }

  async getHero(): Promise<Hero> {
    const hero = {
      id: 20,
      firstName: 'Ines',
      lastName: 'Santamaria',
      capeCounter: 1,
      description: 'the cat whisperer',
    } as Hero;
    return new Promise((resolve) => {
      setTimeout(() => resolve(hero), 2000);
    });
  }
}
</script>

<style scoped lang="scss">
</style>