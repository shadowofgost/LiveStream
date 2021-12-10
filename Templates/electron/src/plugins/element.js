

/*
 * @Time             : 2021-12-04 00:40:00
 * @Author           : Albert Wang
 * @Email            : shadowofgost@outlook.com
 * @Software         : Vscode
 * @FilePath         : /LiveStream/Templates/electron/src/plugins/element.js
 * @Copyright Notice : Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * @Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * @Description      :
 * @LastTime         : 2021-12-04 03:34:07
 * @LastAuthor       : Albert Wang
 */
import ElementPlus from 'element-plus'
import '../element-variables.scss'
import locale from 'element-plus/lib/locale/lang/zh-cn'

export default (app) => {
  app.use(ElementPlus, { locale })
}
