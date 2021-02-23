---
title: 快速上手
---

# 快速上手
> 需要先掌握基本的 `HTML` `CSS` `JavaScript`, 如果你已经具备了这些基础，那么你还需要掌握 `vue3` 的基本用法, 因为`RelaxPlus`是基于`vue3`

## 安装
> 可以使用 npm 或者 yarn 安装
```
npm install relaxplus
// or
yarn add relaxplus
```

## 快速上手
> 将 relaxplus 注册到 vue 中
```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 引入RelaxPlus
import RelaxPlus from 'relaxplus'
import 'relaxplus/lib/relax.css'

createApp(App)
.use(router)
.use(RelaxPlus) // 注册到Vue中
.mount('#app')
```

## 浏览器支持
仅支持现代浏览器，IE？不存在的！
