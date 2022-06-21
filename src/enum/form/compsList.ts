import Input from './input'
import Select from './select'
import Textarea from './textarea'
import Switch from './switch'
import Color from './color'
import Radio from './radio'
import Checkbox from './checkbox'
import Text from './text'
import Divider from './divider'
import Button from './button'
import type { IFormList } from './type'

export const GetCompList = (): IFormList => {
  return [
    {
      title: 'basic',
      children: [
        Input,
        Select,
        Textarea,
        Switch,
        Color,
        Radio,
        Checkbox,
        Text,
        Divider,
        Button,
      ],
    },
  ]
}
