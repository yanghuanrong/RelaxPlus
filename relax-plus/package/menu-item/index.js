import element from './menu-item.vue'

element.install = function(app) {
  app.component(element.name, element)
}

export default element
