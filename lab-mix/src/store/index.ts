import Vue from 'vue';
import { createLogger, MutationTree, ActionTree } from "vuex";
import Vuex from 'vuex'

interface State {
  count: number;
}

export const state: State = {
  count: 0
}

export enum ACTIONS {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}

export enum MUTATIONS {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}

const mutations: MutationTree<State> = {
  [MUTATIONS.INCREMENT]: (state) => { state.count++; },
  [MUTATIONS.DECREMENT]: (state) => { state.count--; }
}

const actions: ActionTree<State, any> = {
  [ACTIONS.INCREMENT]: ({ commit }) => { commit(MUTATIONS.INCREMENT) },
  [ACTIONS.DECREMENT]: ({ commit }) => { commit(MUTATIONS.DECREMENT) }
}

Vue.use(Vuex);

export default new Vuex.Store<State>({
  state: state,
  mutations: mutations,
  actions: actions,
  plugins: [createLogger()]
});
