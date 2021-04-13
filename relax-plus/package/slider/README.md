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



## 双滑块
> 当`v-model`的值为`array`类型时，开启双滑块
:::demo
```html
<template>
  <x-slider :min="5" :max="20" v-model="value" />
</template>

<script>
import {reactive} from 'vue'
export default {
  setup(){
    const value = reactive([10, 15])

    return {
      value,
    }
  }
}
</script>
```
:::

## 显示间隔
> 设置`step`显示间隔
:::demo
```html
<template>
  <x-slider :min="5" :max="10" step v-model="value" />
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    const value = ref(6)

    return {
      value,
    }
  }
}
</script>
```
:::


## 显示ToolTip
> 当 `show-tooltip` 为 `true` 时，将始终显示`ToolTip`；反之则始终不显示，即使在拖动、移入时也是如此。
:::demo
```html
<template>
  <x-slider :min="5" :max="20" v-model="value" show-tooltip />
</template>

<script>
import {reactive} from 'vue'
export default {
  setup(){
    const value = reactive([10, 15])

    return {
      value,
    }
  }
}
</script>
```
:::
