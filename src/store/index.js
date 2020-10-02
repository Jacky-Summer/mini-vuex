import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from './myvuex' // 引入自己写的 vuex
import * as getters from './getters'
import * as actions from './actions'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex) // Vue.use(plugin)方法使用vuex插件

// vuex 导出一个类叫Store，并传入对象作为参数
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
