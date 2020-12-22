---
title: Grid 栅格
tag: Layout
---

# Grid 栅格
> 24 栅格系统
<div class="components-grid-demo">
  <x-row>
    <x-col :span="24" class="color1">24: 100%</x-col>
  </x-row>
  <x-row>
    <x-col :span="12" class="color2">12: 50%</x-col>
    <x-col :span="12" class="color3">12: 50%</x-col>
  </x-row>
  <x-row>
    <x-col :span="8" class="color1">8: 33.33%</x-col>
    <x-col :span="8" class="color2">8: 33.33%</x-col>
    <x-col :span="8" class="color1">8: 33.33%</x-col>
  </x-row>
  <x-row>
    <x-col :span="6" class="color3">6: 25%</x-col>
    <x-col :span="6" class="color2">6: 25%</x-col>
    <x-col :span="6" class="color3">6: 25%</x-col>
    <x-col :span="6" class="color2">6: 25%</x-col>
  </x-row>
  <x-row>
    <x-col :span="16" class="color1">16: 66.66%</x-col>
    <x-col :span="8" class="color2">8: 33.33%</x-col>
  </x-row>
</div>

## 基础用法
> `col` 必须放在 `row` 里面
:::demo
```html
<template>
  <x-row>
    <x-col :span="12"><div>col-12</div></x-col>
    <x-col :span="12"><div>col-12</div></x-col>
  </x-row>
  <x-row>
    <x-col :span="8"><div>col-8</div></x-col>
    <x-col :span="8"><div>col-8</div></x-col>
    <x-col :span="8"><div>col-8</div></x-col>
  </x-row>
  <x-row>
    <x-col :span="6"><div>col-6</div></x-col>
    <x-col :span="6"><div>col-6</div></x-col>
    <x-col :span="6"><div>col-6</div></x-col>
    <x-col :span="6"><div>col-6</div></x-col>
  </x-row>
</template>
```
:::

## 区块间隔
> 通过给 `row` 添加 `gutter` 属性，可以给下属的 `col` 添加间距
:::demo
```html
<template>
  <x-row :gutter="20">
    <x-col :span="6"><div>col-6</div></x-col>
    <x-col :span="6"><div>col-6</div></x-col>
    <x-col :span="6"><div>col-6</div></x-col>
    <x-col :span="6"><div>col-6</div></x-col>
  </x-row>
</template>
```
:::

## flex布局
> 通过给 `row` 设置参数 `justify` 为不同的值，来定义子元素的排布方式。在 `flex` 模式下有效。
:::demo
```html
<template>
  <x-row type="flex" justify="start">
    <x-col :span="4"><div>col-4</div></x-col>
    <x-col :span="4"><div>col-4</div></x-col>
    <x-col :span="4"><div>col-4</div></x-col>
    <x-col :span="4"><div>col-4</div></x-col>
  </x-row>
  <x-row type="flex" justify="end">
    <x-col :span="4"><div>col-4</div></x-col>
    <x-col :span="4"><div>col-4</div></x-col>
    <x-col :span="4"><div>col-4</div></x-col>
    <x-col :span="4"><div>col-4</div></x-col>
  </x-row>
  <x-row type="flex" justify="center">
    <x-col :span="4"><div>col-4</div></x-col>
    <x-col :span="4"><div>col-4</div></x-col>
    <x-col :span="4"><div>col-4</div></x-col>
    <x-col :span="4"><div>col-4</div></x-col>
  </x-row>
  <x-row type="flex" justify="space-between">
    <x-col :span="4"><div>col-4</div></x-col>
    <x-col :span="4"><div>col-4</div></x-col>
    <x-col :span="4"><div>col-4</div></x-col>
    <x-col :span="4"><div>col-4</div></x-col>
  </x-row>
  <x-row type="flex" justify="space-around">
    <x-col :span="4"><div>col-4</div></x-col>
    <x-col :span="4"><div>col-4</div></x-col>
    <x-col :span="4"><div>col-4</div></x-col>
    <x-col :span="4"><div>col-4</div></x-col>
  </x-row>
</template>
```
:::

## flex对齐
> 通过给 `row` 设置参数 `align` 为不同的值，来定义子元素在垂直方向上的排布方式。在 `flex` 模式下有效。
:::demo
```html
<template>
  <x-row type="flex" justify="center" align="top">
    <x-col :span="6"><div style="height: 80px">col-4</div></x-col>
    <x-col :span="6"><div style="height: 30px">col-4</div></x-col>
    <x-col :span="6"><div style="height: 100px">col-4</div></x-col>
    <x-col :span="6"><div style="height: 60px">col-4</div></x-col>
  </x-row>
  <x-row type="flex" justify="center" align="center">
    <x-col :span="6"><div style="height: 80px">col-4</div></x-col>
    <x-col :span="6"><div style="height: 30px">col-4</div></x-col>
    <x-col :span="6"><div style="height: 100px">col-4</div></x-col>
    <x-col :span="6"><div style="height: 60px">col-4</div></x-col>
  </x-row>
  <x-row type="flex" justify="center" align="bottom">
    <x-col :span="6"><div style="height: 80px">col-4</div></x-col>
    <x-col :span="6"><div style="height: 30px">col-4</div></x-col>
    <x-col :span="6"><div style="height: 100px">col-4</div></x-col>
    <x-col :span="6"><div style="height: 60px">col-4</div></x-col>
  </x-row>
</template>
```
:::


## 栅格顺序
> 通过 `flex` 布局的 `order` 来改变栅格的顺序
:::demo
```html
<template>
  <x-row type="flex">
    <x-col :span="6" :order="4"><div>1 | order-4</div></x-col>
    <x-col :span="6" :order="3"><div>2 | order-3</div></x-col>
    <x-col :span="6" :order="2"><div>3 | order-2</div></x-col>
    <x-col :span="6" :order="1"><div>4 | order-1</div></x-col>
  </x-row>
</template>
```
:::

## 左右偏移
> 通过设置 `offset` 属性，将列进行左右偏移
:::demo
```html
<template>
  <x-row>
    <x-col :span="8"><div>col-8</div></x-col>
    <x-col :span="8" :offset="8"><div>col-8 | offset-8</div></x-col>
  </x-row>
  <x-row>
    <x-col :span="6" :offset="8"><div>col-6 | offset-8</div></x-col>
    <x-col :span="6" :offset="4"><div>col-6 | offset-4</div></x-col>
  </x-row>
  <x-row>
    <x-col :span="12" :offset="8"><div>col-12 | offset-8</div></x-col>
  </x-row>
</template>
```
:::

## 响应式布局
> 参照 `Bootstrap` 的 响应式设计，预设四个响应尺寸：`xs` `sm` `md` `lg` <br>
调整浏览器尺寸来查看效果
:::demo
```html
<template>
  <x-row>
    <x-col :xs="24" :sm="12" :md="8" :lg="4"><div>col</div></x-col>
    <x-col :xs="24" :sm="12" :md="8" :lg="4"><div>col</div></x-col>
    <x-col :xs="24" :sm="12" :md="8" :lg="4"><div>col</div></x-col>
    <x-col :xs="24" :sm="12" :md="8" :lg="4"><div>col</div></x-col>
    <x-col :xs="24" :sm="12" :md="8" :lg="4"><div>col</div></x-col>
    <x-col :xs="24" :sm="12" :md="8" :lg="4"><div>col</div></x-col>
  </x-row>
</template>
```
:::