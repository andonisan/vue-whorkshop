import { createStore, createLogger, MutationTree, ActionTree } from "vuex";
import { State } from 'vuex-class';

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

export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  plugins: [createLogger()]
});

// export default createStore({
//   state: { count: 0 },
//   mutations: {
//     INCREMENT(state) {
//       state.count++;
//     },
//     DECREMENT(state) {
//       state.count--;
//     }
//   },
//   actions: {
//     INCREMENT() {
//       this.commit(MUTATIONS.INCREMENT);
//     },
//     DECREMENT() {
//       this.commit(MUTATIONS.DECREMENT);
//     }
//   },
//   modules: {},
//   plugins: [createLogger()]
// });
