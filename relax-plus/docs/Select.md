---
title: Select 选择
tag: Data Entry
---

# Select 选择
> 下拉选择


## 基本用法
> 使用 `v-model` 实现数据的双向绑定
:::demo `v-model` 的值是 `option` 的 `value` 值
```html
<template>
  <x-select v-model="value" placeholder="请选择">
    <x-option value="one" label="options one" />
    <x-option value="two" label="options two" />
    <x-option value="three" label="options three" />
    <x-option value="four" label="options four" />
  </x-select>
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



## 禁用选项
> 给 `option` 组件添加 `disabled` 可以禁止选项
:::demo
```html
<template>
  <x-select v-model="value">
    <x-option value="one" label="options one" />
    <x-option value="two" label="options two" />
    <x-option value="three" label="options three" disabled />
    <x-option value="four" label="options four" disabled/>
  </x-select>
</template>
<script>
  import {ref} from 'vue'
  export default {
    setup(){
      const value = ref('one')

      return {
        value
      }
    }
  }
</script>
```
:::



## 多选
> 给 `option` 组件添加 `disabled` 可以禁止选项
:::demo
```html
<template>
  <x-select v-model="value">
    <x-option value="one" label="One" />
    <x-option value="two" label="Two" />
    <x-option value="three" label="Three" disabled />
    <x-option value="four" label="Four" />
  </x-select>
</template>
<script>
  import {ref} from 'vue'
  export default {
    setup(){
      const value = ref(['one'])

      return {
        value
      }
    }
  }
</script>
```
:::



## 搜索维度
> 添加 `search` 属性将开启搜索，
:::demo
```html
<template>
  <x-select v-model="value" :search="true">
    <x-option value="one" label="One" />
    <x-option value="two" label="Two" />
    <x-option value="three" label="Three"  disabled />
    <x-option value="four" label="Four"  />
  </x-select>
</template>
<script>
  import {ref} from 'vue'
  export default {
    setup(){
      const value = ref(['one'])

      return {
        value
      }
    }
  }
</script>
```
:::