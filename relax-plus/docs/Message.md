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
   <x-button @click="handerClickInfo">显示信息提示</x-button>
   <x-button @click="handerClickError">显示错误提示</x-button>
   <x-button @click="handerClickSuccess">显示成功提示</x-button>
   <x-button @click="handerClickWarning">显示警告提示</x-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$message} = instance.appContext.config.globalProperties
      const handerClickInfo = () => {
        $message.info('显示信息提示')
      }
      const handerClickError = () => {
        $message.error('显示错误提示')
      }
      const handerClickSuccess = () => {
        $message.success('显示成功提示')
      }
      const handerClickWarning = () => {
        $message.warning('显示警告提示')
      }
      return {
        handerClickInfo,
        handerClickError,
        handerClickSuccess,
        handerClickWarning
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
  <x-button @click="loading">显示加载中</x-button>
  <x-button @click="info">3秒后自动关闭</x-button>
</template>
<script>
import {getCurrentInstance} from 'vue'
export default {
  setup(){
    const instance = getCurrentInstance()
    const {$message} = instance.appContext.config.globalProperties

    const loading = () => {
      const message = $message.loading('message 消息', 0)
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
