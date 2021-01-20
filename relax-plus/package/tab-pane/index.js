import element from './tab-pane.vue'

element.install = function (app) {
  app.component(element.name, element)
}

export default element
