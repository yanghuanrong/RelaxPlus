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
      const checked = ref(true)

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
  <x-checkbox label="one" @change="change" />
  <x-checkbox label="two" disabled />
  <x-checkbox label="three" disabled checked />
  <x-checkbox label="four" disabled checked> 橘子 </x-checkbox>
</template>
<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$message} = instance.appContext.config.globalProperties

      const change = (value) => {
        $message[value ? 'success' : 'error'](value)
      }

      return {
        change
      }
    }
  }
</script>
```
::: 

## checkbox 组
>使用 `CheckboxGroup` 配合数组来生成组合。在组合使用时，`Checkbox` 使用 `label` 来自动判断选中状态。每个 `Checkbox` 的内容可以自定义，如不填写则默认使用 `label` 的值
:::demo
```html
<template>
  <x-checkbox-group v-model="options">
    <x-checkbox label="one" />
    <x-checkbox label="two" />
    <x-checkbox label="three" />
    <x-checkbox label="four" />
  </x-checkbox-group>
  <div style="margin-top: 10px">
  选中的值：{{options}}
  </div>
</template>

<script>
  import {reactive} from 'vue'
  export default {
    setup(){
      const options = reactive([])

      return {
        options
      }
    }
  }
</script>
```
:::

