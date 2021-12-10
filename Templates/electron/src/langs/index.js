
/*
 * @Time             : 2021-12-04 00:51:22
 * @Author           : Albert Wang
 * @Email            : shadowofgost@outlook.com
 * @Software         : Vscode
 * @FilePath         : /LiveStream/Templates/electron/src/langs/index.js
 * @Copyright Notice : Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * @Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * @Description      :
 * @LastTime         : 2021-12-04 15:35:57
 * @LastAuthor       : Albert Wang
 */
// 导入element语言包
import defaultLang from 'element-plus/lib/locale/lang/en'
import zhCn from "element-plus/lib/locale/lang/zh-cn";

// 导入系统语言包
import zh from './zh-CN'
import en from './en-US'

export default {
	label: {
		"zh-cn": "简体中文",
		"en-us": "English",
	},
	icon: {
		"zh-cn": require("../assets/images/langs/zh-cn.png"),
		"en-us": require("../assets/images/langs/en-us.png"),
	},
	data: {
		//'zh-cn': {  ...zh },
		//'en-us': {  ...en },
		"zh-cn": { ...zhCn, ...zh },
		"en-us": { ...defaultLang, ...en },
	},
};
