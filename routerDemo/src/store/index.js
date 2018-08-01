import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import one from './modules/one'
import users from './modules/users'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
		one, // 这里有问题 在这儿换成大写的会报错（上面引入也换成大写） 找不到这个模块 
		users
	},
	getters
})

export default store