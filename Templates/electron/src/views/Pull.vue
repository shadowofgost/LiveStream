<!--
 * @Time             : 2021-11-27 02:44:50
 * @Author           : Albert Wang
 * @Email            : shadowofgost@outlook.com
 * @Software         : Vscode
 * @FilePath         : /LiveStream/Templates/electron/src/views/Home.vue
 * @Copyright Notice : Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * @Description      :
 * @LastTime         : 2021-12-03 23:43:47
 * @LastAuthor       : Albert Wang
-->
<template>
	<div class="Pull">
		<table width="80%" class="tab">
			<caption>
				<b>摄像头列表</b>
			</caption>
			<tr v-for="item in videoDeviceList" :key="item">
				<td
					:class="{ cur: item == selectVideo }"
					@click="setSelectVideo(item)"
				>
					{{ item }}
				</td>
			</tr>
		</table>
		<table width="80%" class="tab">
			<caption>
				<b>麦克风列表</b>
			</caption>
			<tr v-for="item in audioDeviceList" :key="item">
				<td
					:class="{ cur: item == selectAudio }"
					@click="setSelectAideo(item)"
				>
					{{ item }}
				</td>
			</tr>
		</table>
		<table width="80%" class="tab">
			<caption>
				<b>rtmp推流地址：</b>
			</caption>
			<tr>
				<td>
					<input
						style="width: 100%; border: 0; outline: none"
						v-model="outRtmpPath"
						type="text"
					/>
				</td>
			</tr>
		</table>
		<div>
			<input
				@click="goToffmpeg"
				value="推桌面流"
				class="btn"
				type="button"
			/>
			<input
				@click="stopCommand"
				value="停止推流"
				class="btn"
				type="button"
			/>
			<input
				@click="complexFfmpeg"
				value="合流"
				class="btn"
				type="button"
			/>
		</div>
	</div>
</template>

<script>
	import { ipcRenderer } from "electron";
	const cp = require("child_process");
	const path = require("path");
	const ffmpeg = require("fluent-ffmpeg");
	if (process.env.NODE_ENV == "development") {
		var ffmpegPath = path.join("lib/ffmpeg.exe");
	} else {
		var ffmpegPath = "./resources/app/lib/ffmpeg.exe";
	}
	var command = "";
	export default {
		name: "Pull",
		data() {
			return {
				selectVideo: "",
				selectAudio: "",
				videoDeviceList: [],
				audioDeviceList: [],
				outRtmpPath: "rtmp://localhost:1938/live/livestream",
			};
		},
		mounted() {
			this.screenCode = window.screen.width + "x" + window.screen.height;
			this.getDevices();
		},
		methods: {
			getDevices() {
				let video_device_list = [];
				let audio_device_list = [];
				let video_device_name_flag = false;
				let audio_device_name_flag = false;
				let p = cp.spawn(ffmpegPath, [
					"-f",
					"dshow",
					"-list_devices",
					"true",
					"-i",
					"dummy",
				]);
				let str = "";
				p.stderr.on("data", (data) => {
					str += data.toString();
				});
				p.on("close", (code) => {
					var EOL = process.platform === "win32" ? "\r\n" : "\n";
					var lines = str.split(EOL);
					for (var i = 0; i < lines.length; i++) {
						let _l = lines[i];
						if (_l.indexOf("[dshow") > -1) {
							if (_l.indexOf("DirectShow video devices") > -1) {
								video_device_name_flag = true;
								audio_device_name_flag = false;
							} else if (
								_l.indexOf("DirectShow audio devices") > -1
							) {
								video_device_name_flag = false;
								audio_device_name_flag = true;
							} else if (
								video_device_name_flag &&
								_l.indexOf("Alternative name") == -1
							) {
								if (_l.match(/\"(.*)\"/)) {
									let video_device_name =
										_l.match(/\"(.*)\"/)[1];
									video_device_list.push(video_device_name);
								}
							} else if (
								audio_device_name_flag &&
								_l.indexOf("Alternative name") == -1
							) {
								if (_l.match(/\"(.*)\"/)) {
									let audio_device_name =
										_l.match(/\"(.*)\"/)[1];
									audio_device_list.push(audio_device_name);
								}
							}
						}
					}
					this.videoDeviceList = video_device_list;
					this.audioDeviceList = audio_device_list;
				});
			},
			complexFfmpeg() {
				command = ffmpeg();
				command.setFfmpegPath(ffmpegPath);
				command.input("desktop");
				command.inputFormat("gdigrab");
				command.inputOptions("-framerate 60");
				command.inputOptions("-offset_x 0");
				command.inputOptions("-offset_y 0");
				command.inputOptions("-video_size " + this.screenCode);
				if (this.selectVideo) {
					command.input(`video=${this.selectVideo}`);
					command.inputFormat("dshow");
					command.inputOptions("-s 320*180");
					command.complexFilter([
						{
							filter: "overlay",
							options: {
								x: "main_w-overlay_w",
								y: "main_h-overlay_h",
							},
							inputs: ["[0:v]", "[1:v]"],
						},
					]);
				}
				if (this.selectAudio) {
					command.input(`audio=${this.selectAudio}`);
					command.inputFormat("dshow");
				}
				command.addOptions([
					"-vcodec libx264",
					"-preset ultrafast",
					//'-acodec libmp3lame',
					"-acodec aac",
					"-pix_fmt yuv422p",
				]);
				command.format("flv");
				command.output(this.outRtmpPath, { end: true });
				command.on("start", function (commandLine) {
					console.log("[" + new Date() + "] Vedio is Pushing !");
					console.log("commandLine: " + commandLine);
				});
				command.on("error", function (err, stdout, stderr) {
					console.log("error: " + err.message);
				});
				command.on("end", function () {
					console.log(
						"[" + new Date() + "] Vedio Pushing is Finished !"
					);
				});
				command.run();
			},
			stopCommand() {
				console.log("stopCommand");
				command.on("error", function () {
					console.log("Ffmpeg has been killed");
				});
				command.kill();
			},
			setSelectVideo(item) {
				this.selectVideo = item;
			},
			setSelectAideo(item) {
				this.selectAudio = item;
			},
			goToffmpeg() {
				command = ffmpeg();
				command.setFfmpegPath(ffmpegPath);
				command.input("desktop");
				command.inputFormat("gdigrab");
				command.inputOptions("-framerate 60");
				command.inputOptions("-offset_x 0");
				command.inputOptions("-offset_y 0");
				command.inputOptions("-video_size " + this.screenCode);
				if (this.selectAudio) {
					command.input(`audio=${this.selectAudio}`);
					command.inputFormat("dshow");
				}
				command.addOptions([
					"-vcodec libx264",
					"-preset ultrafast",
					//'-acodec libmp3lame',
					"-acodec aac",
					"-pix_fmt yuv422p",
				]);
				command.format("flv");
				command.output(this.outRtmpPath, { end: true });
				command.on("start", function (commandLine) {
					console.log("[" + new Date() + "] Vedio is Pushing !");
					console.log("commandLine: " + commandLine);
				});
				command.on("error", function (err, stdout, stderr) {
					console.log("error: " + err.message);
				});
				command.on("end", function () {
					console.log(
						"[" + new Date() + "] Vedio Pushing is Finished !"
					);
				});
				command.run();
			},
		},
	};
</script>
<style>
	.tab {
		border: 1px solid #ccc;
		border-collapse: collapse;
		margin-bottom: 20px;
	}
	.tab td {
		border: 1px solid #ccc;
		height: 30px;
		padding: 0 10px;
		cursor: pointer;
	}
	.tab td.cur {
		background: #ffc;
	}
	.btn {
		height: 40px;
		line-height: 40px;
		background: #06f;
		color: #fff;
		outline: none;
		cursor: pointer;
		border: 0;
		margin: 20px 5px;
		padding: 0 30px;
	}
	.btn:active {
		background: #03f;
	}
	.video-box {
		width: 500px;
		height: 330px;
		border: 1px solid #ccc;
	}
</style>
