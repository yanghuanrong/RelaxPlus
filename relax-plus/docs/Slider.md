---
title: Slider 滑动块
tag: Data Entry
---

# Slider 滑动块
> 滑动范围输入控件

## 演示
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
    const value = ref(20)

    return {
      value,
    }
  }
}
</script>
```
:::


## 范围选择
> `min` 和 `max` 可以限制最小值和最大值
:::demo
```html
<template>
  <x-slider :min="5" :max="10" v-model="value" />
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    const value = ref(8)

    return {
      value,
    }
  }
}
</script>
```
:::