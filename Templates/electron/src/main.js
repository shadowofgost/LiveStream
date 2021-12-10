/*
 * @Time             : 2021-11-26 21:23:43
 * @Author           : Albert Wang
 * @Email            : shadowofgost@outlook.com
 * @Software         : Vscode
 * @FilePath         : /LiveStream/Templates/electron/src/main.js
 * @Copyright Notice : Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * @Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * @Description      :
 * @LastTime         : 2021-12-04 16:45:19
 * @LastAuthor       : Albert Wang
 */
import { createApp } from "vue";
import App from "./App.vue";
//import ViewUI from "view-design";
import ElementPlus from "element-plus";
import router from "./router.js";
import store from "./store.js";
import i18n from "./i18n";
import utils from "./global/utils";
import components from "./global/components";
import config from "./config";
import * as Cookies from "js-cookie";
import XDrag from "x-dragandresize";
import VueQuillEditor, { Quill } from "vue-quill-editor";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";
import { ElMessage } from "element-plus";
import "element-plus/dist/index.css";
import "./registerServiceWorker";
import installElementPlus from "./plugins/element";
import "./registerServiceWorker";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import "./assets/styles/main.less";
//import "./iview-variables.less";

// Vue 全局配置
let isDev = process && process.env.NODE_ENV !== "production";

// i18n实例

const app = createApp(App);
app.use(ElementPlus);
app.config.globalProperties.$Message = ElMessage;
app.provide('$message', ElMessage)
app.config.globalProperties.$X = {
	isDev,
	utils,
	config,
	Cookies,
};
app.config.debug = isDev;
app.config.devtools = isDev;
app.config.productionTip = isDev;
app.config.performance = isDev;
app.use(router)
	.use(store)
	.use(components)
const i18nInstance = i18n(app, "zh-cn");
app.use(i18nInstance)
	.use(VueQuillEditor)
	.use(XDrag)
	.mount("#app");
Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imageResize", ImageResize);
