<template>
  <footer>
    <p>© 2016 GridLayout.io</p>
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  background: #321313;
  grid-area: footer;
  color: var(--primary);
  text-align: center;

  & p {
      color:red;
  }
}
</style>
