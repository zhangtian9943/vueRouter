<template>
	<div>
		<h3>剑侠奇缘</h3>
		<el-col :span="4">
			<el-input v-model="query.name" placeholder="登录名"></el-input>
		</el-col>
		<el-col :span="4">
			<el-input v-model="query.password" placeholder="密码" type="passWord"></el-input>
		</el-col>
		<el-button @click="login">登录</el-button>
		<dialog-drag>
		</dialog-drag>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import DialogDrag from '../../components/dialogDrag'
export default {
	name: 'dashbord',
	components: {
		DialogDrag
	},
	data () {
		return {
			query: {
				name: '',
				password: '',				
			},
		}
	},
	computed: {
		...mapGetters(['info'])
	},
	methods: {
		...mapActions([
			'addInfo'
		]),
		// 登录
		login() {
			this.addInfo(this.query)
			this.$router.push(`/demo1`)
			console.log(this.info)
		},
		// btnDialog() {
		// 	this.showDialog = true
		// }
	}
}
</script>

