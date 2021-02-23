import element from './radio.vue'

element.install = function (app) {
  app.component(element.name, element)
}

export default element
