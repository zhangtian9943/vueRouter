const one = {
  state: {
		character: {
			name: '',
			age: '',
			sex: '',
			tall: '',
			weight: ''
		},
		skills: {
			one: '冰雨寒霜',
			two: '如来神掌',
			three: '无影脚',
			four: '天崩地裂'

			// one: '',
			// two: '',
			// three: '',
			// four: ''
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