export interface IWidgetItem {
  title: string
  type: string
  icon?: any
  key: string
  component: string
  form: IWidgetItemForm
  noForm?: boolean
  children?: IWidgetItem[]
  parent?: string
  updateDataFn?: () => void // 用来更新组件内的数据
}

export type IWidgetItemForm = Record<
  string,
  {
    label: string
    type: string
    value: any
  }
>

export type IWidgetItemFormOptions = objectT<{
  component: string
  [name: string]: any
}>

export type objectT<T> = Record<string, T>
