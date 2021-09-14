---
title: Steps 步骤条
tag: General
---

# Steps 步骤条
>  一步两步，一步两步；一步一步似爪牙，是魔鬼的步伐

## 演示
> 简单的步骤条

:::demo
```html
<template>
  <x-steps :current="active">
    <x-step title="第一步" description="打开微信扫一扫" />
    <x-step title="第二步" description="添加好友" />
    <x-step title="第三步" description="选择我的头像" />
    <x-step title="第四步" description="转款1000万" />
  </x-steps>

  <x-button type="primary" plain @click="onNext" style="margin-top: 30px">下一步</x-button>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(){
      const active = ref(2);

      const onNext = () => {
        if (active.value++ > 3) active.value = 0;
      }

      return {
        active,
        onNext
      }
    }
  }
</script>
```
:::



## 默认插槽
> 插槽里放你想放的东西

:::demo
```html
<template>
  <x-steps :current="3">
    <x-step>第一步</x-step>
    <x-step>第二步</x-step>
    <x-step>第三步</x-step>
    <x-step>第四步</x-step>
  </x-steps>
</template>
```
:::



## 自定义Icon
> 可以放自己喜欢的图标啦

:::demo
```html
<template>
  <x-steps :current="1">
    <x-step icon="x-icon-headphones">听听歌</x-step>
    <x-step icon="x-icon-sun">晒晒太阳</x-step>
    <x-step icon="x-icon-flag">成啦</x-step>
  </x-steps>
</template>
```
:::
