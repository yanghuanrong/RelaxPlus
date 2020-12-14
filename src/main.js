import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import RelaxUI from '@RelaxPlus/package'
import '@RelaxPlus/theme/style.less'

const app = createApp(App)
app.use(router)
app.use(RelaxUI)
app.mount('#app')
