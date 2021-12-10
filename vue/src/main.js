/*
 * @Author: your name
 * @Date: 2021-11-27 10:47:41
 * @LastEditTime: 2021-11-27 11:17:17
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \LiveStream\vue\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'

// import 'vant/lib/index.css'
import { ActionBar, Button } from 'vant'

const app = createApp(App)
app.use(router)

app.use(ActionBar)
    .use(Button)

app.mount('#app')
