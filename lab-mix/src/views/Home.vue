<template>
  <div class="home">
    <p>{{ count}}</p>
    <button @click="increment">INCREMENTAR</button>
    <button @click="decrement">DECREMENTAR</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store, { ACTIONS } from "@/store";
import { Action, State } from "vuex-class";

@Component
export default class Home extends Vue {
  @State("count") protected count!: number;
  @Action(ACTIONS.INCREMENT) protected increment!: void;
  @Action(ACTIONS.DECREMENT) protected decrement!: void;
}
</script>
