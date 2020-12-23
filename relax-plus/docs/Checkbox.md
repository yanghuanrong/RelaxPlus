---
title: Checkbox 多选框
tag: Data Entry
---

# Checkbox 多选框
> 有可选项且需要选择多项

## 基本用法
> 使用 `v-model` 双向绑定
:::demo
```html
<template>
  <x-checkbox v-model="checked" label="Checkbox" />
</template>

<script>
  import {ref} from 'vue'
  export default {
    setup(){
      const checked = ref(false)

      return {
        checked
      }
    }
  }
</script>
```
:::

## 禁用
> 添加 `disabled` 属性 禁用 `checkbox`
:::demo
```html
<template>
  <x-checkbox label="banana" disabled />
  <x-checkbox label="apple" disabled checked />
  <x-checkbox label="orange" disabled checked> 橘子 </x-checkbox>
</template>
```
:::