import Modal from './modal.vue'
import { createComponent } from '../../utils/component'

Modal.install = function (app) {
  app.component(Modal.name, element)
}

let mouseClick 
const getClickPosition = (e) => {
  mouseClick = {
    x: e.clientX,
    y: e.clientY,
  };
  setTimeout(() => (mouseClick = null), 100);
};
document.addEventListener('click', getClickPosition, true)

function ModalsCreate(option, type) {
  const props = {
    ...option,
    type,
    mouseClick,
    teleprot: false,
    modelValue: true,
  }

  document.body.style.overflow = 'hidden'
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
