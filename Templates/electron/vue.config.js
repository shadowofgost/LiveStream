/*
 * @Author: your name
 * @Date: 2021-11-27 02:36:18
 * @LastTime         : 2021-12-04 02:51:10
 * @LastAuthor       : Albert Wang
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 * @FilePath         : /LiveStream/Templates/electron/vue.config.js
 */

const webpack = require('webpack');
module.exports = {
	publicPath: "./",
	productionSourceMap: false,
	lintOnSave: false,
	// 部署应用包时的基本URL，置空使用相对路径
	// 打包输出目录
	outputDir: "build",
	// 静态资源目录
	assetsDir: "",
	productionSourceMap: false,
	// 开发环境
	// devServer: {
	//   // 代理设置
	//   proxy: {
	//     '/api': {
	//       target: '<url>',
	//       changeOrigin: true
	//     }
	//   }
	// }
	css: {
		loaderOptions: {
			less: {
				// 解决https://github.com/ant-design/ant-motion/issues/44问题
				// 相关问题：https://github.com/ant-design/ant-design/issues/7927#issuecomment-372513256
				javascriptEnabled: true,
			},
		},
	},
	configureWebpack: {
		output: {
			// path: `${root}/public/assets/`,
			// publicPath: '/lead/assets',
			// filename: `${fileName()}.js`,
			chunkFilename: "[name].[chunkhash].js",
		},
	},
	chainWebpack: (config) => {
		config.plugin("provide").use(webpack.ProvidePlugin, [
			{
				"window.Quill": "quill",
			},
		]);
	},
	pluginOptions: {
		electronBuilder: {
			nodeIntegration: true,
			contextIsolation: false,
			builderOptions: {
				productName: "electron",
				appId: "com.example.doapis",
				asar: true,
				extraResources: {
					from: "./lib/ffmpeg.exe",
					to: "./../resources/app/lib/ffmpeg.exe",
				},
			},
		},
	},
};
