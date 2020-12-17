import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import RelaxUI from 'RelaxPlus'
import RelaxPlus from '@RelaxPlus/dist/RelaxPlus.js'
import '@RelaxPlus/theme/style.less'
import demoBlock from '@RelaxPlus/config/demoBlock.vue'
import '@/style/global.less'

console.log(RelaxPlus)

createApp(App)
.use(router)
// .use(RelaxUI)
.use(RelaxPlus)
.component('demo-block', demoBlock)
.mount('#app')
