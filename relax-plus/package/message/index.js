import element from './message.vue'
import {createComponent} from '../../utils/component'


function messageCreate(content, type, duration) {
  const props = {
    content,
    type
  }

  const component = createComponent(element, props)
  document.body.appendChild(component.vnode.el)
}

const type = element.setup(element.props).icon
let oneKey = null

function message (content, duration){
  message[oneKey](content, oneKey, duration)
}

Object.keys(type).forEach((key) => {
  oneKey || (oneKey = key)
  message[key] = (content, duration) => messageCreate(content, key, duration)
})


export default message