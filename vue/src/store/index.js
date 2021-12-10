/*
 * @Author: your name
 * @Date: 2021-11-27 11:14:01
 * @LastEditTime: 2021-11-27 11:14:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \LiveStream\vue\src\store\index.js
 */
import { createStore } from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

export default createStore({
  state,
  mutations,
  actions,
  modules: {}
})
