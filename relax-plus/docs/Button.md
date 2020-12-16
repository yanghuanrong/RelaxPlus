---
title: Button 按钮
tag: General
---

# Button 按钮
> 帅气的Button

## 基础按钮
> 按钮可以根据 `type` 来设置不同的颜色，提供了6种类型的按钮 `primary` `success` `info` `danger` `warning`
:::demo
```html
<template>
  <x-button type="warning"> warning </x-button>
  <x-button type="primary"> primary </x-button>
  <x-button type="success"> success </x-button>
  <x-button type="info"> info </x-button>
  <x-button type="danger"> danger </x-button>
</template>
```
:::

## 镂空按钮
> 设置 `plain` 属性可以设置镂空按钮
:::demo
```html
<template>
  <x-button type="warning" plain> warning </x-button>
  <x-button type="primary" plain> primary </x-button>
  <x-button type="success" plain> success </x-button>
  <x-button type="info" plain> info </x-button>
  <x-button type="danger" plain> danger </x-button>
</template>
```
:::
