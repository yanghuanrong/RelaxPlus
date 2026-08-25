<div align="center">

<img src="https://raw.githubusercontent.com/yanghuanrong/RelaxPlus/master/examples/assets/logo.png" width="160px"/>



🔥 [文档网址](https://yanghuanrong.github.io/RelaxPlus/)

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

# 打包组件
yarn lib
```

## 提交规范
```
feat：新功能（feature）

fix：修补bug

docs：文档（documentation）

style： 格式（不影响代码运行的变动）

refactor：重构（即不是新增功能，也不是修改bug的代码变动）

test：增加测试

chore：构建过程或辅助工具的变动
```
## 浏览器支持
仅支持现代浏览器，IE？不存在的！

## 赞赏
您的 star 是对作者最大的支持和动力！

