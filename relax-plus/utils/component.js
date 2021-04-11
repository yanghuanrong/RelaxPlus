import { h, render } from 'vue'

export function createComponent(component, props) {
  const vnode = h(component, props)
  render(vnode, document.createElement('div'))
  return vnode.component
}
