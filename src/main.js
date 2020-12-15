import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import RelaxUI from '@RelaxPlus/package'
import '@RelaxPlus/theme/style.less'
import demoBlock from '@RelaxPlus/config/demoBlock.vue'
import '@/style/global.less'

const app = createApp(App)
app.use(router)
app.use(RelaxUI)
app.component('demo-block', demoBlock)
app.mount('#app')
