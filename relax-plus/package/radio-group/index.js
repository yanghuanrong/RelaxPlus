import element from './radio-group.vue'

element.install = function (app) {
  app.component(element.name, element)
}

export default element
