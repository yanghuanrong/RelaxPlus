// General
import Button from './button/index'
import Icon from './icon/index'

// Feedback
import Message from './message/index'
import Notice from './notice/index'

// Layout
import Row from './row/index'
import Col from './col/index'

// Data Entry 
import Switch from './switch/index'


const components = [
  Button,
  Icon,
  Switch,
  Row,
  Col
]

const install = function (app) {
  components.forEach((component) => {
    app.component('x'+component.name, component)
  })

  applyOptions(app)
}

function applyOptions(app){
  app.config.globalProperties.$message = Message
  app.config.globalProperties.$notice = Notice
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button,
  Icon,
  Message,
  Switch,
  Notice,
  Row,
  Col
}
