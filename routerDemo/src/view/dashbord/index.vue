<template>
	<div>
		<el-row>
			<el-form>				
					<el-form-item label="111">
						<el-col :span="4">
							<el-form-item>
								<el-input placeholder="shuru"></el-input>
							</el-form-item>						
						</el-col>
						<el-col :span="4">
							<el-form-item label="2222">
								<el-input placeholder="shuru"></el-input>
							</el-form-item>
						</el-col>
					</el-form-item>				
			</el-form>
		</el-row>
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

