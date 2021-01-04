import Modal from './modal.vue'
import { createComponent } from '../../utils/component'

Modal.install = function (app) {
  app.component(Modal.name, element)
}

function ModalsCreate(option, type) {
  const props = {
    ...option,
    type,
    teleprot: false,
    modelValue: true,
  }

  const component = createComponent(Modal, props)
  document.body.appendChild(component.vnode.el)
}

let oneKey = null

function Modals (props){
  Modals[oneKey](props)
}

;['info','error', 'success', 'warning', 'confirm'].forEach((type) => {
  oneKey || (oneKey = type)
  Modals[type] = (props) => ModalsCreate(props, type)
})



export default {
  Modal,
  Modals
}
