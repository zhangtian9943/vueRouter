<template>
	<div>
		<h3>人物详情</h3>
		<el-button @click="viewInfo" size="small">查看</el-button>
		<el-button @click="goBack" size="small">上一页</el-button>
		<p>mapGetters取出仓库state中的数据</p>
		<span>用户名：{{userID}}</span>
		<div>
			<span>姓名：{{query.name}}</span><br>
			<span>性别：{{query.sex}}</span><br>
			<span>年龄：{{query.age}}</span><br>
			<span>职业：{{query.professional}}</span><br>
			<span>帮派：{{query.gang}}</span>
		</div>
		<div>
			<span>技能：{{skill}}</span>
		</div>
		<p>
			最初想法是直接从state中获取数据DOM渲染 不用再写事件触发，但没有找到好的方法实现
		</p><br><br><br>
		<Test>
		</Test>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import Test from '../components/test1'
export default {
	components: {
		Test
	},
	data () {
		return {
			query: {
				name: '',
				sex: '',
				age: '',
				professional: '',
				gang: ''
			},
			skill: '',
			userID: ''
		}
	},
	computed: {
		...mapGetters(['character', 'skills', 'info'])
	},
	methods: {
		// 显示人物详情
		viewInfo() {
			this.userID = this.info.name
			this.query = this.character			
			let dataSkill = []
			for (const val in this.skills) {
				dataSkill.push(this.skills[val])
				console.log(this.skills[val])
			}
			this.skill = dataSkill.join()
			console.log(dataSkill)
		},
		goBack() {
			history.back(-1)
		}
	}
}
</script>