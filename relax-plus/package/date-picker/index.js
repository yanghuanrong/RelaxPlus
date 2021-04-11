import element from './date-picker.vue'

element.install = function(app) {
  app.component(element.name, element)
}

export default element
