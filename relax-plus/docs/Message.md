---
title: Message 消息
tag: Feedback
---

# Message 消息
> 消息通知

## 普通提示
> 最基本的提示，默认在 `1.5` 秒后消失。
:::demo `message` 会被挂载在 `vue` 全局属性中, 当然也可以引入 `RelaxPlus` 直接使用
```html
<template>
   <x-button type='primary' @click="handerClick">显示普通提示</x-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$message} = instance.appContext.config.globalProperties
      const handerClick = () => {
        $message('你好呀')
      }
      return {
        handerClick
      }
    }
  }
</script>
```
:::


## 提示类型
> 调用 `message` 下的 `info` `error` `success` `warning`来选择合适的场景。
:::demo 
```html
<template>
   <x-button type="info" plain @click="open1">显示信息提示</x-button>
   <x-button type="danger" plain @click="open2">显示错误提示</x-button>
   <x-button type="success" plain @click="open3">显示成功提示</x-button>
   <x-button type="warning" plain @click="open4">显示警告提示</x-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$message} = instance.appContext.config.globalProperties
      const open1 = () => {
        $message.info('显示信息提示')
      }
      const open2 = () => {
        $message.error('显示错误提示')
      }
      const open3 = () => {
        $message.success('显示成功提示')
      }
      const open4 = () => {
        $message.warning('显示警告提示')
      }
      return {
        open1,
        open2,
        open3,
        open4
      }
    }
  }
</script>
```
:::


## 加载中
> `Loading` 的状态，并异步在某个时机移除。
:::demo 关闭时间为 `0` 的时候需要手动关闭
```html
<template>
  <x-button type="primary" plain @click="loading">显示加载中</x-button>
  <x-button type="primary" plain @click="info">3秒后自动关闭</x-button>
</template>
<script>
import {getCurrentInstance} from 'vue'
export default {
  setup(){
    const instance = getCurrentInstance()
    const {$message} = instance.appContext.config.globalProperties

    const loading = () => {
      const message = $message.loading('3秒后自动关闭', 0)
      setTimeout(message, 3000)
    }

    const info = () => {
      $message('message 消息', 3)
    }
    return {
      loading,
      info
    }
  }
}
</script>
```
:::
