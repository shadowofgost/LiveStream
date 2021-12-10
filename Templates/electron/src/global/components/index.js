

/*
 * @Time             : 2021-12-04 00:51:14
 * @Author           : Albert Wang
 * @Email            : shadowofgost@outlook.com
 * @Software         : Vscode
 * @FilePath         : /LiveStream/Templates/electron/src/global/components/index.js
 * @Copyright Notice : Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * @Copyright 2021 Albert Wang 王子睿, All Rights Reserved.
 * @Description      :
 * @LastTime         : 2021-12-04 11:25:48
 * @LastAuthor       : Albert Wang
 */
import {
  ElMenu,
  ElMenuItem,
  ElTooltip,
  ElDivider,
  ElColorPicker,
  ElInputNumber,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElIcon,
  ElMessage,
  ElModal,
  ElInput,
  ElForm,
  ElFormItem,
  ElSlider,
  ElSelect,
  ElOption
} from 'element-plus'

import { Sketch } from 'vue-color'

import XIcon from './Icon/Index'
import XTooltip from './Tooltip/Index'
const Menu = ElMenu;
const MenuItem = ElMenuItem;
const Tooltip = ElTooltip
const Divider = ElDivider
const ColorPicker = ElColorPicker
const InputNumber = ElInputNumber
const Dropdown = ElDropdown
const DropdownMenu = ElDropdownMenu
const DropdownItem = ElDropdownItem
const Icon = ElIcon
const Message = ElMessage
const Modal = ElModal
const Input = ElInput
const Form = ElForm
const FormItem = ElFormItem
const Slider = ElSlider
const Select = ElSelect
const obj = {
  // ui组件
  Menu,
  MenuItem,
  Tooltip,
  Divider,
  ColorPicker,
  InputNumber,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Icon,
  Modal,
  Input,
  Form,
  FormItem,
  Slider,
  Select,
  Option,
  // 颜色选择器
  SketchPicker: Sketch,
  // 自定义组件
  XIcon,
  XTooltip
}

const components = {}
components.install = function (Vue, options) {
  for (let name in obj) {
    if (name && obj[name]) {
      Vue.component(name, obj[name])
      if (['Message', 'Modal'].includes(name)) {
        Vue.prototype[`$${name}`] = obj[name]
      }
    }
  }
}

export default components
