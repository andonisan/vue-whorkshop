<template>
  <aside>
    Sidebar / Ads
    <slot></slot>
  </aside>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Aside extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
aside {
  grid-area: side;
  margin-right: 0.5rem;
}
</style>
