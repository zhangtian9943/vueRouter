<template>
	<div>
		<h3>创建角色</h3>
		<el-col :span="4">
			<el-input v-model="query.name" placeholder="姓名"></el-input>
		</el-col>
		<el-col :span="4">
			<el-input v-model="query.age" placeholder="年龄"></el-input>
		</el-col>
		<el-col :span="4">
			<el-input v-model="query.sex" placeholder="性别"></el-input>
		</el-col>
		<el-col :span="4">
			<el-input v-model="query.professional" placeholder="职业"></el-input>
		</el-col>
		<el-col :span="4">
			<el-input v-model="query.gang" placeholder="城市"></el-input>
		</el-col><br><br>
		<h3>技能</h3>
		<el-col :span="4">
			<el-input v-model="skill.one" placeholder="技能一" :disabled="isChange"></el-input>
		</el-col>
		<el-col :span="4">
			<el-input v-model="skill.two" placeholder="技能二" :disabled="isChange"></el-input>
		</el-col>
		<el-col :span="4">
			<el-input v-model="skill.three" placeholder="技能三" :disabled="isChange"></el-input>
		</el-col>
		<el-col :span="4">
			<el-input v-model="skill.four" placeholder="技能四" :disabled="isChange"></el-input>
		</el-col>
		<el-button type="text" @click="changeSkills">修改</el-button><br><br>
		<el-button @click="sumbit" type="primary">保存</el-button>
		<el-button @click="routerJump">人物详情</el-button>
	</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	data () {
		return {
			query: {
				name: '',
				age: '',
				sex: '',
				professional: '',
				gang: ''
			},
			skill: {
				one: '倒转昆仑',
				two: '大海无量',
				three: '飞龙在天',
				four: '天崩地裂'
			},
			isChange: true
		}
	},
	computed: {
		...mapGetters(['character', 'skills'])
	},
	methods: {
		...mapActions([
			'addPersonInfo',
			'addPersonSkill'
		]),
		// 修改键 可修改
		changeSkills() {
			this.isChange = false
		},
		// 提交键 
		sumbit() {
			this.isChange = true
			this.addPersonInfo(this.query) 
			this.addPersonSkill(this.skill)
			console.log(this.skills) // 打印验证
			console.log(this.character)
		},
		// 路由跳转
		routerJump() {
			this.$router.push('/demo2')
		}
	}
}
</script>