<!--
 * @Time             : 2021-11-27 09:51:37
 * @Author           : Albert Wang
 * @Email            : shadowofgost@outlook.com
 * @Software         : Vscode
 * @FilePath         : /LiveStream/Templates/electron/src/views/Video.vue
 * @Copyright Notice : Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * @Description      :
 * @LastTime         : 2021-12-04 20:41:54
 * @LastAuthor       : Albert Wang
-->
<template>
	<div class="Video">
		<video
			name="videoElement"
			class="centeredVideo"
			id="videoElement"
			controls
			width="98%"
			height="98%"
			autoplay
		>
			Your browser is too old which doesn't support HTML5 video.
		</video>
		<Button @click="Play" type="primary">播放</Button>
	</div>
</template>
<style>
	.mainContainer {
		display: block;
		width: 1024px;
		margin-left: auto;
		margin-right: auto;
	}

	.urlInput {
		display: block;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 8px;
		margin-bottom: 8px;
	}

	.centeredVideo {
		display: block;
		width: 100%;
		height: 576px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: auto;
	}

	.controls {
		display: block;
		width: 100%;
		text-align: left;
		margin-left: auto;
		margin-right: auto;
		margin-top: 8px;
		margin-bottom: 10px;
	}

	.logcatBox {
		border-color: #cccccc;
		font-size: 11px;
		font-family: Menlo, Consolas, monospace;
		display: block;
		width: 100%;
		text-align: left;
		margin-left: auto;
		margin-right: auto;
	}
</style>
<script>
	// @ is an alias to /src
	import flvjs from "flv.js";
	export default {
		name: "Video",
		data() {
			return {
				flvPlayer: null,
			};
		},
		mounted() {
			if (flvjs.isSupported()) {
				var videoElement = this.$refs.videoElement;
				this.flvPlayer = flvjs.createPlayer({
					type: "flv",
					enableWorker: true, //浏览器端开启flv.js的worker,多进程运行flv.js
					isLive: true, //直播模式
					hasAudio: false, //关闭音频
					hasVideo: true,
					stashInitialSize: 128,
					enableStashBuffer: false,
					url: "http://127.0.0.1:8888/live?port=1938&app=live&stream=livestream",
					type: "flv",
					url: "http://localhost:8080/live/stream.flv",
				});
				this.flvPlayer.attachMediaElement(videoElement);
				this.flvPlayer.load();
				this.flvPlayer.play();
			} else {
				console.log("FLV.js is not supported.");
			}
		},
		methods: {
			Play() {
				this.flvPlayer.play();
			},
		},
	};
	function startVideo() {
		var videoElement = document.getElementById("videoElement");
		var flvPlayer = flvjs.createPlayer({
			type: "flv",
			enableWorker: true, //浏览器端开启flv.js的worker,多进程运行flv.js
			isLive: true, //直播模式
			hasAudio: false, //关闭音频
			hasVideo: true,
			stashInitialSize: 128,
			enableStashBuffer: false,
			url: "http://127.0.0.1:8888/live?port=1938&app=live&stream=livestream",
		});
		flvPlayer.attachMediaElement(videoElement);
		flvPlayer.load();
		flvPlayer.play();
	}
/*
	videoElement.addEventListener("click", function () {
		alert(
			"是否支持点播视频：" +
				flvjs.getFeatureList().mseFlvPlayback +
				" 是否支持httpflv直播流：" +
				flvjs.getFeatureList().mseLiveFlvPlayback
		);
	});
*/
	function destoryVideo() {
		flvPlayer.pause();
		flvPlayer.unload();
		flvPlayer.detachMediaElement();
		flvPlayer.destroy();
		flvPlayer = null;
	}

	function reloadVideo() {
		destoryVideo();
		startVideo();
	}
</script>
