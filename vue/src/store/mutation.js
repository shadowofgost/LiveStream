/*
 * @Author: your name
 * @Date: 2021-11-27 11:16:49
 * @LastEditTime: 2021-11-27 11:16:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \LiveStream\vue\src\store\mutation.js
 */
export default {
  addCart (state, payload) {
    state.info = payload.count
  }
}
