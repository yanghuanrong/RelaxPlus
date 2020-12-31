---
title: 快速上手
---

# 快速上手
需要先掌握基本的 `HTML` `CSS` `JavaScript`, 如果你已经具备了这些基础，那么你还需要掌握 `vue3` 的基本用法, 因为`RelaxPlus`是基于`vue3`
<p style="height: 50px"></p>

# 安装
目前还没有发布到 `npm` 市场，作者还在发愤图强，努力学习与编写，你也可以选择在 [Github](https://github.com/yanghuanrong/RelaxPlus) 中直接下载。后期在理想状态下, 应该是用下面这样的方式进行安装
```html
yarn add RelaxPlus 
// or
npm install RelaxPlus
```

# 引入
假设你已经下载了 `RelaxPlus` 并且同时假设 `RelaxPlus` 已经发布在 `npm` , 那么可以这样引入
```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 引入RelaxPlus
import RelaxPlus from 'RelaxPlus'
import 'RelaxPlus/theme/relax.less'

createApp(App)
.use(router)
.use(RelaxPlus) // 注册到Vue中
.mount('#app')
```
