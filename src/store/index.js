import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import user from './module/user'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    user
  },
  getters
})

export default store
