---
title: Input 输入框
tag: Data Entry
---

# Input 输入框
> 通过鼠标或键盘输入内容，是最基础的表单域的包装


## 基本用法
> 使用 `v-model` 实现数据的双向绑定
:::demo
```html
<template>
  <x-input placeholder="请输入" type="text" v-model="value" />
  <x-input placeholder="请输入" type="password" v-model="value" style="margin-left:5px" />
  <div style="margin-top: 10px">
    输入框值：{{value}}
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    const value = ref('')

    return {
      value
    }
  }
}
</script>
```
:::


## 文本域
> 设置 `type` 属性为 `textarea`
:::demo
```html
<template>
  <x-input placeholder="请输入" type="textarea" rows="7" cols="20" v-model="value" />
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    const value = ref('')

    return {
      value
    }
  }
}
</script>
```
:::