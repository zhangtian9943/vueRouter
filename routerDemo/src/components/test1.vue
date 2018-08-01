<template>
	<div>
		<h3>子组件test</h3>
		<p>在子组件中获取仓库中的所有数据：</p>
		<button @click="getState">获取</button>
		<button @click="clearState">清空数据</button>
		<p>uesers=>info: {{infoData}}</p>
		<p>one=>character: {{characterData}}</p>
		<p>one=>skill: {{skillData}}</p>
		<p>在点击清空数据后得到的结果应该是DOM渲染没有变化。但真实的实现是info中的数据自动更新渲染父组件中的DOM了，其它的都没变化</p>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	data () {
		return {
			infoData: '',
			characterData: '',
			skillData: ''
		}
	},
	computed: {
		...mapGetters([
			'info',
			'character',
			'skills'
		])
	},
	methods: {
		getState() {
			let infoChange = []
			let characterChaneg = []
			let skillChange = []
			for (const val in this.info) {
				infoChange.push(this.info[val])
				// console.log(this.info.val)
				// console.log(val)
			}
			for (const val in this.character) {
				characterChaneg.push(this.character[val])
			}
			for (const val in this.skills) {
				skillChange.push(this.skills[val])
			}
			this.infoData = infoChange.join('|')
			this.characterData = characterChaneg.join('|')
			this.skillData = skillChange.join('|')
		},
		clearState() {
			for (const val in this.info) {
				this.info[val] = ''
			}
			for (const val in this.skills) {
				this.skills[val] = ''
			}
			for (const val in this.character) {
				this.character[val] = ''
			}
		}
	}
}
</script>

