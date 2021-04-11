import element from './tooltip.js'

element.install = function(app) {
  app.component(element.name, element)
}

export default element
