<template>
  <div>		
		<el-button @click="btnDialog">弹窗</el-button>
		<el-dialog
			name="dialog"
			ref="dialogName"
			title="提示"
			:style="widthName"
			:visible.sync="dialogVisible"
			width="30%"
			:lock-scroll="true"
			:close-on-click-modal="false"
			:modal-append-to-body="false">
			<span style="color: blue" ref="font" name="fontName">这是一段信息</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
			<el-button @click="getOffset">
				获取坐标
			</el-button>
		</el-dialog>		
	</div>	
</template>
<script>
import Vue from 'vue'
export default {
	components: {
	},
	props: ['query'],
  data () {
    return {
			dialogVisible: false,
			widthName: '',
    }
	},
	computed: {
		
	},
	methods: {
		btnDialog() {
			this.dialogVisible = true
		},
		getOffset() {
			// console.log('------------------------------------------------------------')
			// console.log(document.getElementsByName('dialog'))
			// console.log(document.getElementsByName('dialog').position)
			// // document.getElementsByName('fontName').$el.style.color = 'red'
			// // this.$refs.font.$el.style.color = 'red'
			// console.log(this.$refs.dialogName)
			// this.$set(this.$refs.dialogName.style, 'width', '50%')
			// // this.$refs.dialogName.style.width = '70%'
			// console.log(this.$refs.dialogName.style.width)
			// console.log(this.$refs.dialogName.style)
			this.widthName = 'width: 80%'
			console.log(this.$refs.dialogName.style.width)
		}
	}
}
</script>
<style>

</style>


