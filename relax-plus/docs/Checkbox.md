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
:::demo 当状态改变时，会触发 `change` 事件
```html
<template>
  <x-checkbox label="one" @change="change" />
  <x-checkbox label="two" disabled />
  <x-checkbox label="three" disabled checked />
  <x-checkbox label="four" disabled checked> four </x-checkbox>
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
    <x-checkbox label="one" disabled />
    <x-checkbox label="two" />
    <x-checkbox label="three"  />
    <x-checkbox label="four"  />
    <x-checkbox label="five" disabled />
  </x-checkbox-group>
  
  <div style="margin-top: 10px">
  选中的值：{{options}}
  </div>
</template>

<script>
  import {reactive} from 'vue'
  export default {
    setup(){
      const options = reactive(['one', 'two'])
      
      return {
        options,
      }
    }
  }
</script>
```
:::

## 控制 checkbox
> 数据联动
:::demo
```html
<template>
  <x-checkbox label="checkbox" :disabled="disabled" :checked="checked" />
  
  <div style="margin-top: 10px">
    <x-button type="success" size='sm' @click="checked = !checked">{{checked ? 'Checked' : 'Unchecked'}}</x-button>
    <x-button type="danger" size='sm' @click="disabled = !disabled">{{disabled ? 'Disabled' : 'Enabled'}}</x-button>
  </div>
</template>

<script>
  import {ref} from 'vue'
  export default {
    setup(){
      const checked = ref(true)
      const disabled = ref(true)
      return {
        checked,
        disabled
      }
    }
  }
</script>
```
:::


## 布局
> Checkbox 与 Grid 组件一起使用，可以实现灵活的布局。
:::demo
```html
<template>
  <x-row>
    <x-col v-for="item in options" >
      <x-checkbox v-model="item.checked" v-bind="item" >options {{item.label}}</x-checkbox>
    </x-col>
  </x-row>

  <div style="margin-top: 10px">
  选中的值：<pre>{{options}}</pre>
  </div>
</template>
  
<script>
  import {reactive} from 'vue'
  export default {
    setup(){
      const options = reactive([{
        label: 'one',
        checked: true,
        disabled: true,
      },
      {
        label: 'two',
        checked: true,
        disabled: false,
      },
      {
        label: 'one',
        checked: false,
        disabled: false,
      },{
        label: 'three',
        checked: false,
        disabled: false,
      },{
        label: 'four',
        checked: false,
        disabled: true,
      }])
      
      return {
        options,
      }
    }
  }
</script>
```
:::