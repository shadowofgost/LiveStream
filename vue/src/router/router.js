/*
 * @Author: your name
 * @Date: 2021-11-27 11:06:45
 * @LastEditTime: 2021-11-27 11:13:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \LiveStream\vue\router.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('../views/index.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/home.vue')
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('../views/user.vue')
        }
    ]
})

export default router
