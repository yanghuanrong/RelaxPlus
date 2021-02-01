<div style="text-align:center">

![Image text](https://gitee.com/bsie/RelaxPlus/raw/master/src/assets/logo.png)

# RelaxPlus

💖[文档地址](https://bsie.gitee.io/relaxplus/)

</div>

## 介绍
`RelaxPlus`是作者精心打磨的vue3组件库，最早的版本可以追溯到2017年（基于vue2），它非常轻量、精美。适合用于vue3组件学习。

## 安装
```
npm install vue3-relaxui
// or
yarn add vue3-relaxui
```
## 快速上手
```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 引入RelaxPlus
import RelaxPlus from 'vue3-relaxui'
import 'vue3-relaxui/lib/relax.css'

createApp(App)
.use(router)
.use(RelaxPlus) // 注册到Vue中
.mount('#app')
```
## 浏览器支持
支持现代浏览器，不支持 ie


