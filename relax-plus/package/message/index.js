import element from './message.vue'
import {createComponent} from '../../utils/component'


function messageCreate(content, type, duration) {

  const props = {
    content,
    type,
    duration: duration
  }
  
  const component = createComponent(element, props)
  document.body.appendChild(component.vnode.el)
  return component.setupState.close.bind(this)
}

let oneKey = null

function message (content, duration){
  message[oneKey](content, duration)
}

;['info','error', 'success', 'warning', 'loading'].forEach((type) => {
  oneKey || (oneKey = type)
  message[type] = (content, duration) => messageCreate(content, type, duration)
})


export default message