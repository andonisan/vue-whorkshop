<template>
  <Container>
    <Header>Holy Grail Layout with CSS Grid</Header>
    <Nav>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </Nav>

    <main>
      Main content
      <router-view />
    </main>

    <Aside></Aside>

    <Footer></Footer>
  </Container>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header  from "@/components/Header.vue";
import Footer  from "@/components/Footer.vue";
import Nav  from "@/components/Nav.vue";
import Aside  from "@/components/Aside.vue";
import Container  from "@/components/Container.vue";

@Options({
  components: {
    Header,
    Footer,
    Nav,
    Aside,
    Container
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --primary: white;
  --secondary: HSL(225, 6%, 51%);
  --base: #282f44;
  --base2: HSL(225, 6%, 21%);
  --text-color: HSL(225, 6%, 21%);
  --link-color: #093341;
}
</style>
