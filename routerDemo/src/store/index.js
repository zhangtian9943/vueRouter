import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import One from './modules/one'
import Users from './modules/users'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
		One,
		Users
	},
	getters
})

export default store