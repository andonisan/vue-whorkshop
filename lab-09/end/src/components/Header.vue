<template>
  <header>
    <a href="/">
      <img src="@/assets/logo.png" width="50" alt="GridLayout.io" />
    </a>
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  background: #f4991a;
  grid-area: header;
  padding: 1rem 0;

  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
