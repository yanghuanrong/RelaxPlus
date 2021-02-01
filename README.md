<div align="center">

![image](https://gitee.com/bsie/RelaxPlus/raw/master/src/assets/logo.png)

# RelaxPlus

🔥 [文档网址](https://bsie.gitee.io/relaxplus/)

</div>

## 介绍
`RelaxPlus`是作者精心打磨的vue3组件库，最早的版本可以追溯到2017年（基于vue2），它非常轻量、精美。适合用于vue3组件学习。


## 安装
```
npm install relaxplus
// or
yarn add relaxplus
```


## 快速上手
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

## 开发
下载项目进行依赖安装 `npm install` or `yarn`

```
# 运行
yarn serve

# 打包文档
yarn build

# 打包组件, 需要全局安装rollup
yarn build:ui

# 打包文档, 样式需要全局安装less
yarn build:css
```

## 浏览器支持
仅支持现代浏览器，谁去管 ie 呀？


## 赞赏
您的 star 是对作者最大的支持和动力！

