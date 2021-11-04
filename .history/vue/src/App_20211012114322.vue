<!--
 * @Author: Albert Wang
 * @LastEditors: Albert Wang
 * @Date: 2021-10-12 11:14:57
 * @LastEditTime: 2021-10-12 11:34:31
 * @Description:
 * @FilePath: \\LiveStream\\vue\\src\\App.vue
 * @Copyright Notice:  2021 Albert Wang 王子睿.All Rights Reserved.
-->
<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
	import HelloWorld from "./components/HelloWorld.vue";

	export default {
		name: "App",
		components: {
			HelloWorld,
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
