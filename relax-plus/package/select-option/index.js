import element from './select-option.vue'

element.install = function (app) {
  app.component(element.name, element)
}

export default element
