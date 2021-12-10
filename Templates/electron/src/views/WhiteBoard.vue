<!--
 * @Time             : 2021-12-03 23:43:02
 * @Author           : Albert Wang
 * @Email            : shadowofgost@outlook.com
 * @Software         : Vscode
 * @FilePath         : /LiveStream/Templates/electron/src/views/WhiteBoard.vue
 * @Copyright Notice : Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * @Description      : 这是白板程序的入口
 * @LastTime         : 2021-12-04 02:42:10
 * @LastAuthor       : Albert Wang
-->
<style scoped lang="less" rel="stylesheet/less"></style>

<template>
	<router-view></router-view>
</template>

<script>
	export default {
		name: "WhiteBoard",
		created() {
			// 阻止浏览器默认右键菜单
			document.oncontextmenu = function (event) {
				if (event.stopPropagation) {
					event.stopPropagation();
				}
				if (event.preventDefault) {
					event.preventDefault();
				}
			};
		},
	};
</script>
