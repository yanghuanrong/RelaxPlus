---
title: Input 输入框
tag: Data Entry
---

# Input 输入框
> 通过鼠标或键盘输入内容，是最基础的表单域的包装


## 演示
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


## 前缀和后缀图标
> 通过设置 `icon-before` 和 `icon-after` 设置前缀及后缀图标
:::demo
```html
<template>
  <x-input placeholder="请输入" icon-before="x-icon-search" />
  <x-input placeholder="请输入" icon-after="x-icon-calendar" style="margin-left:5px" />
</template>
```
:::



## 可清空
> 通过设置 `clearable` 可以开启输入框的清空
:::demo
```html
<template>
  <x-input placeholder="请输入" clearable />
</template>
```
:::

clearable


## 文本域
> 设置 `type` 属性为 `textarea`
:::demo `maxlength` 可以限制 `textarea` 的输入长度
```html
<template>
  <x-input placeholder="请输入" style="width: 350px" type="textarea" rows="7" cols="20" :maxlength="40" />
</template>

```
:::