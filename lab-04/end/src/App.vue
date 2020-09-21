<template>
 <div id="app">
    <h1>Data Binding</h1>
    <Heroes/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Heroes from "@/components/Heroes.vue";

@Component({
  components: {
    Heroes
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
// @import "@/styles/index.scss";
#app {
  margin: 36px 48px;
  .title {
    margin-bottom: 24px
  }
}
</style>
