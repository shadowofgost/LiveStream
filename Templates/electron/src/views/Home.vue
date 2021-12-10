

<!--
 * @Time             : 2021-11-27 02:44:50
 * @Author           : Albert Wang
 * @Email            : shadowofgost@outlook.com
 * @Software         : Vscode
 * @FilePath         : /LiveStream/Templates/electron/src/views/Home.vue
 * @Copyright Notice : Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * @Description      :
 * @LastTime         : 2021-12-04 21:09:33
 * @LastAuthor       : Albert Wang
-->
<template>
	<div id="app">
		<img src="../assets/logo.png" />
		<div>
			<el-row>
				<el-button round>Round</el-button>
				<el-button type="primary"  @click="Pull">推流</el-button>
				<el-button type="primary"  @click="Video">直播</el-button>
				<el-button type="primary"  @click="WhiteBoard"
					>白板</el-button
				>
			</el-row>
		</div>
	</div>
</template>

<script>
		export default {
		components: {
		},
		name: 'Home',
		data () {
		    // 注意：data即使不需要传数据，也必须return,否则会报错
		return {
		}
		},
		methods: {
			Pull(){
				this.$router.push('Pull')
			},
			Video(){
				this.$router.push('Video')
			},
			WhiteBoard(){
				this.$router.push('Whiteboard')
			},
		},
	};
</script>
