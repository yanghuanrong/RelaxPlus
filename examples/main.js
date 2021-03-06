import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import RelaxPlus from 'RelaxPlus'
import 'RelaxPlus/theme/relax.less'
import demoBlock from 'RelaxPlus/config/demoBlock.vue'
import '@/style/global.less'

createApp(App)
  .use(router)
  .use(RelaxPlus)
  .component('demo-block', demoBlock)
  .mount('#app')
