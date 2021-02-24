import element from './menu-item-group.vue'

element.install = function (app) {
  app.component(element.name, element)
}

export default element
