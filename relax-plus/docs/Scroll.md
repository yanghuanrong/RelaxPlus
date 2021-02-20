---
title: Scroll 滚动
tag: Data Display
---

# Scroll 滚动
> 比原生浏览器更漂亮的滚动条


## 演示
> 可以设置 `height` 控制滚动区域的高度
:::demo
```html
<template>
  <x-scroll :height="250">
    <div class="demo-scroll-item" v-for="item in 10">{{item}}</div>
  </x-scroll>
</template>
```
:::


## 触发事件
> `onScroll` 事件可以知道当前滚动的比值，从而实现业务逻辑
:::demo
```html
<template>
  <x-button type="primary" plain @click="handleClick(true)">添加内容</x-button>
  <x-button type="danger" plain @click="handleClick(false)">减少内容</x-button>
  <x-scroll :height="250" @onScroll="scroll">
    <div class="demo-scroll-item" v-for="item in count">{{item}}</div>
  </x-scroll>
</template>

<script>
  import {getCurrentInstance, ref} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$message} = instance.appContext.config.globalProperties
      const count = ref(3)

      const scroll = (val) => {
        if(val === 0){
          $message('到顶部了')
        } else if(val === 1) {
          $message('到底部了')
        }
      }

      const handleClick = (val) => {
        if(val){
          count.value += 3
        } else {
          count.value -= 3
          count.value = count.value < 0 ? 0 : count.value 
        }
      }

      return {
        scroll,
        count,
        handleClick
      }
    }
  }
</script>
```
:::

## 滚动到指定坐标
> `v-model:to` 是一个双向绑定的值，用于控制滚动到指定的坐标
:::demo `alwaysVisible` 是否隐藏滚动条,默认 `true`
```html
<template>
  <x-button type="primary" plain @click="to = 500">滚动到 500</x-button>
  <x-button type="primary" plain @click="to = 1200">滚动到 1200</x-button>
  <x-badge :count="to" />

  <x-scroll :height="250" v-model:to="to"  :alwaysVisible="false">
    <div class="demo-scroll-item" v-for="item in 50">{{item}}</div>
  </x-scroll>
</template>

<script>
  import {getCurrentInstance, ref} from 'vue'
  export default {
    setup(){
      const to = ref(0)

      return {
        to,
      }
    }
  }
</script>
```
:::



## 无限滚动
> 在滚动条 `80%` 的位置开始追加内容
:::demo
```html
<template>
  <x-scroll :height="250" @onScroll="scroll">
    <div class="demo-scroll-item" v-for="item in count">{{item}}</div>
  </x-scroll>
</template>

<script>
  import {getCurrentInstance, ref} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$message} = instance.appContext.config.globalProperties

      const count = ref(4)

      const scroll = (val) => {
        if(val >= 0.8){
            count.value += 3
        }
      }
      return {
        scroll,
        count
      }
    }
  }
</script>
```
:::

