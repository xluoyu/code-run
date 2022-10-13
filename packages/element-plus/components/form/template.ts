/*
 * @Description:
 * @Author: xluoyu
 * @LastEditTime: 2022-08-24 21:00:28
 */
import type { renderWidgetCode } from '@corgi-icode/core'
import { formatArrt } from '@corgi-icode/core'

export default <renderWidgetCode> function(
  option,
  _formDataName,
) {
  const attrs = ['inline', 'label-width', 'label-position', 'size']
  const attrsStr = attrs
    .map(attr => formatArrt(`${attr}`, option[attr]))
    .filter(Boolean)
    .join(' ')

  const formDataName = option._key || _formDataName

  return {
    template: (children: string) => `<el-form :model="${formDataName}" ${attrsStr} :rules='${formDataName}Rules'>
      ${children}
      <el-form-item>
        <el-button type="primary" @click="submit">
          ${option.formType === 'form' ? '提交' : '搜索'}
        </el-button>
        <el-button @click="reset">
          重置
        </el-button>
      </el-form-item>
    </el-form>`,
    formData: {
      [formDataName]: {},
    },
    formDataName,
    privateVar: {
      submit: `() => {
        
        console.log(${formDataName})
      }`,
      reset: `() => {
        console.log('重置')
      }`,
    },
  }
}
