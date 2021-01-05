---
title: Slider 滑动块
tag: Data Entry
---

# Slider 滑动块
> 滑动范围输入控件

## 基础用法
> 拖动滑块时，显示数值
:::demo
```html
<template>
  <x-slider v-model="value" />
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    const value = ref(0)

    return {
      value,
    }
  }
}
</script>
```
:::


## 显示进度条
> 拖动滑块时，显示数值
:::demo
```html
<template>
  <x-slider progress v-model="value" />
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    const value = ref(40)

    return {
      value,
    }
  }
}
</script>
```
:::