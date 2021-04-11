---
title: Carousel 轮播
tag: Data Display
---

# Carousel 轮播
> 以轮播的方式显示一组元素，非常经典

## 演示
> 默认
:::demo
```html
<template>
  <x-carousel width="500px" height="250px">
    <x-carousel-item class="demo-carousel" v-for="item in 4">
      {{item}}
    </x-carousel-item>
  </x-Carousel>
</template>
```
:::


## 自动播放
> 设置 `autoplay` 开启自动播放
:::demo
```html
<template>
  <x-carousel width="500px" height="250px" autoplay>
    <x-carousel-item class="demo-carousel" v-for="item in 4">
      {{item}}
    </x-carousel-item>
  </x-Carousel>
</template>
```
:::