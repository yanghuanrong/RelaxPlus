import Button from './button/index.js'
import Icon from './icon/index.js'

const components = [
  Button,
  Icon
]

const install = function (app, opts = {}) {
  components.forEach((component) => {
    app.component('x'+component.name, component)
  })
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
