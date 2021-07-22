import element from './drawer.vue';

element.install = function(app) {
  app.component(element.name, element);
};

export default element;
