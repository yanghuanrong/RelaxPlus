// General
import Button from './button/index'
import Icon from './icon/index'

// Feedback
import Message from './message/index'

const components = [
  Button,
  Icon
]

const install = function (app) {
  components.forEach((component) => {
    app.component('x'+component.name, component)
  })

  applyOptions(app)
}

function applyOptions(app){
  app.config.globalProperties.$message = Message
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button,
  Icon
}
