import { ADD_COUNT, REDUCE_COUNT, SET_TITLE } from './mutation-types'

const mutations = {
  [ADD_COUNT](state, payload) {
    state.count += payload
  },
  [REDUCE_COUNT](state, payload) {
    state.count -= payload
  },
  [SET_TITLE](state, payload) {
    state.title = payload
  },
}

export default mutations
