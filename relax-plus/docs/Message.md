---
title: Message 消息
tag: Feedback
---

# Message 消息
> 消息通知

## 普通提示
> 最基本的提示，默认在 `1.5` 秒后消失。
:::demo
```html
<template>
   <x-button type='primary' @click="message">显示普通提示</x-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const {ctx} = getCurrentInstance()
      const message = () => {
        ctx.$message('你好呀，我是赛丽亚')
      }
      return {
        message
      }
    }
  }
</script>
```
:::