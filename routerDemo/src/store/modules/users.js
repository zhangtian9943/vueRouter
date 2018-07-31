// 用户名 密码
const users = {
	state: {
		info: {
			name: '',
			password: ''
		}		
	},
	mutations: {
		SET_INFO: (state, info) => {
			state.info = info
		}
	},
	actions: {
		addInfo({ commit }, info) {
			commit('SET_INFO', info)
		}
	}
}