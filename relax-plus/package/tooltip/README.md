---
title: Tooltip 文字提示
tag: General
---

# Tooltip 文字提示
> 用于辅助的文字提示，可代替 HTML 元素默认的 title 属性

## 演示
> 基本使用
:::demo 文字必须要被标签包裹
```html
<template>
  <x-tooltip content="这是文字提示">
    <span>文字提示</span>
  </x-tooltip>
</template>
```
:::

## 位置
> left , top , right , bottom 是物理中的 4 个方向, 表示显示的位置
:::demo 通过`placement`设置不同的位置
```html
<template>
  <div class="tooltip-box">
    <x-row type="flex" justify="center">
      <x-col :span="5">
        <x-tooltip content="这是文字提示" placement="top-start">
          <x-button type="primary" plain> 上左 </x-button>
        </x-tooltip>
      </x-col>
      <x-col :span="5">
        <x-tooltip content="这是文字提示" placement="top">
          <x-button type="primary" plain> 上中 </x-button>
        </x-tooltip>
      </x-col>
      <x-col :span="5">
        <x-tooltip content="这是文字提示" placement="top-end">
          <x-button type="primary" plain> 上右 </x-button>
        </x-tooltip>
      </x-col>
    </x-row>

    <x-row type="flex" justify="space-between">
      <x-col :span="4">
        <x-tooltip content="这是文字提示" placement="left-start">
          <x-button type="primary" plain> 左上 </x-button>
        </x-tooltip>
      </x-col>
      <x-col :span="4">
        <x-tooltip content="这是文字提示" placement="right-start">
          <x-button type="primary" plain> 右上 </x-button>
        </x-tooltip>
      </x-col>
    </x-row>

    <x-row type="flex" justify="space-between">
      <x-col :span="4">
        <x-tooltip content="这是文字提示" placement="left">
          <x-button type="primary" plain> 左中 </x-button>
        </x-tooltip>
      </x-col>
      <x-col :span="4">
        <x-tooltip content="这是文字提示" placement="right">
          <x-button type="primary" plain> 右中 </x-button>
        </x-tooltip>
      </x-col>
    </x-row>

    <x-row type="flex" justify="space-between">
      <x-col :span="4">
        <x-tooltip content="这是文字提示" placement="left-end">
          <x-button type="primary" plain> 左下 </x-button>
        </x-tooltip>
      </x-col>
      <x-col :span="4">
        <x-tooltip content="这是文字提示" placement="right-end">
          <x-button type="primary" plain> 右下 </x-button>
        </x-tooltip>
      </x-col>
    </x-row>

    <x-row type="flex" justify="center">
      <x-col :span="5">
        <x-tooltip content="这是文字提示" placement="bottom-start">
          <x-button type="primary" plain> 下左 </x-button>
        </x-tooltip>
      </x-col>
      <x-col :span="5">
        <x-tooltip content="这是文字提示" placement="bottom">
          <x-button type="primary" plain> 下中 </x-button>
        </x-tooltip>
      </x-col>
      <x-col :span="5">
        <x-tooltip content="这是文字提示" placement="bottom-end">
          <x-button type="primary" plain> 下右 </x-button>
        </x-tooltip>
      </x-col>
    </x-row>

  </div>
</template>
```
:::

## 设置宽度
> 可以设置`tooltip`的宽度 换行可以用 `br`
:::demo 文字必须要被标签包裹
```html
<template>
  <x-tooltip content="这是一段非常长的文字提示，主要是用于演示" width="180px">
    <span>文字提示</span>
  </x-tooltip>
</template>
```
:::