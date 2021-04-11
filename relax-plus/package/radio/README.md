---
title: Radio 单选框
tag: Data Entry
---

# Radio 单选框
> 有可选项进行单选

## 演示
> 使用 `v-model` 双向绑定
:::demo
```html
<template>
  <x-radio label="one" :value="1" v-model="radio" />
  <x-radio label="two" :value="2" v-model="radio" />
</template>
<script>
  import {ref} from 'vue'
  export default {
    setup(){
      const radio = ref(1)

      return {
        radio
      }
    }
  }
</script>
```
:::

## 禁用
> 添加 `disabled` 属性 禁用 `radio`
:::demo
```html
<template>
  <x-radio label="one" checked />
  <x-radio label="two" disabled  />
  <x-radio label="three" disabled checked> four </x-radio>
</template>
```
::: 

## radio 组
> 添加 `disabled` 属性 禁用 `radio`
:::demo
```html
<template>
  <x-radio-group v-model="radio">
    <x-radio label="one" value="1"  />
    <x-radio label="two" value="2"   />
    <x-radio label="three" value="3" disabled> three </x-radio>
    <x-radio label="three" value="4" disabled> three </x-radio>
  </x-radio-group>
</template>
<script>
  import {ref} from 'vue'
  export default {
    setup(){
      const radio = ref('4')

      return {
        radio
      }
    }
  }
</script>
```
::: 