import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import RelaxUI from 'RelaxPlus'
import '@RelaxPlus/theme/style.less'
import demoBlock from '@RelaxPlus/config/demoBlock.vue'
import '@/style/global.less'

createApp(App)
.use(router)
.use(RelaxUI)
.component('demo-block', demoBlock)
.mount('#app')
