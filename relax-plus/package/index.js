import Button from './button/index.js'

const components = [
  Button
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
  Button
}
