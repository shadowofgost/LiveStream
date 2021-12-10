/*
 * @Time             : 2021-12-04 02:07:10
 * @Author           : Albert Wang
 * @Email            : shadowofgost@outlook.com
 * @Software         : Vscode
 * @FilePath         : /LiveStream/Templates/electron/src/i18n.js
 * @Copyright Notice : Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * @Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * @Description      : 国际化设置
 * @LastTime         : 2021-12-04 16:28:07
 * @LastAuthor       : Albert Wang
 */

import { createI18n }  from 'vue-i18n/index';
import langs from "./langs";
import locale from "element-plus/lib/locale/index";

export default function(Vue, defLang){
	let { config, Cookies } = Vue.config.globalProperties.$X;
	let key = config.cookie.getItem("locale");
	let val = Cookies.get(key);
	if (!defLang) {
		let keys = Object.keys(langs.label);
		defLang = val || keys[0];
	}
	// 注册插件
	Vue.locale = () => {};
	// 全局挂载语言包key
	Vue.config.globalProperties.$X.langs = langs;
	Vue.config.globalProperties.$X.locale = defLang;
	// i18n实例
	let i18nInstance = createI18n ({
		locale: defLang,
		messages: langs.data,
		legacy: false,
		globalInjection: true,
	});
	// FIXME 覆写iview i18n方法，修复$Modal弹窗报错BUG，【Issues】https://github.com/iview/iview/issues/4769#issuecomment-449851416
	//locale.i18n((path, options) => i18nInstance.t(path, options));
	return i18nInstance;
};
