---
title: DatePicker 日期选择
tag: Data Entry
---

# DatePicker 日期选择
> 时间选择器，可以选择日期

## 演示
> 使用 `v-model` 实现数据的双向绑定
:::demo
```html
<template>
  <x-date-picker v-model="value" placeholder="YYYY-MM-DD" />
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


## 一键选值
> 设置 `onetap` 开启一键选值
:::demo
```html
<template>
  <x-date-picker v-model="value" onetap placeholder="YYYY-MM-DD" />
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



## 禁用
> 设置 `onetap` 开启一键选值
:::demo
```html
<template>
  <x-date-picker disabled placeholder="YYYY-MM-DD" />
</template>
```
:::
