const one = {
  state: {
		character: {
			name: '',
			age: '',
			sex: '',
			professional: '',
			gang: ''
		},
		skills: {
			one: '',
			two: '',
			three: '',
			four: ''
		}
	},
	mutations: {
		SET_CHARACTER: (state, data) => {
			state.character = data
		},
		SET_SKILLS: (state, data) => {
			state.skills = data
		}
	},
	actions: {
		addPersonInfo({ commit }, data) {
			commit('SET_CHARACTER', data)
		},
		addPersonSkill({ commit }, data) {
			commit('SET_SKILLS', data)
		}
	}
}

export default one