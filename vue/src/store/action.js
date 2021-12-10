/*
 * @Author: your name
 * @Date: 2021-11-27 11:15:27
 * @LastEditTime: 2021-11-27 11:15:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \LiveStream\vue\src\store\action.js
 */
import { getCart } from "../service/cart";

export default {
	async updateCart(ctx) {
		const { data } = await getCart();
		ctx.commit("addCart", {
			count: data.length || 0,
		});
	},
};
