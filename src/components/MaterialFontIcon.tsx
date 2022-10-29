
import { h } from 'vue'
import type { IconType, fontType } from '../iconTypes'

const fontTypeGroup = {
  default: 'material-icons-outlined',
  outlined: 'material-icons'
}

const FontIcon = (props: { name: IconType, type?: fontType }) => {
  const fontClass: string = fontTypeGroup[props.type || 'default']
  return h(
    <span class={fontClass}>{props.name}</span>
  )
}
export default FontIcon