<!--
 * @Time             : 2021-12-04 00:51:33
 * @Author           : Albert Wang
 * @Email            : shadowofgost@outlook.com
 * @Software         : Vscode
 * @FilePath         : /LiveStream/Templates/electron/src/views/Board.vue
 * @Copyright Notice : Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * @Description      :
 * @LastTime         : 2021-12-04 02:16:14
 * @LastAuthor       : Albert Wang
-->

<style scoped lang="less" rel="stylesheet/less"></style>

<template>
	<div class="view">
		<BoardBox></BoardBox>
	</div>
</template>

<script>
	import BoardBox from "../components/BoardBox/Index";

	export default {
		name: "Board",
		components: {
			BoardBox,
		},
		created() {
			let _t = this;
			// 分发mutation，新增画板
			_t.$store.commit("board/list/add", {
				id: new Date().getTime(),
				screenshot: "",
			});
			_t.$store.commit("board/activeBoardIndex/update", 0);
		},
	};
</script>
