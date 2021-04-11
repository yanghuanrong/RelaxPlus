---
title: Badge 徽标
tag: Data Display
---

# Badge 徽标
> 用于按钮、图标旁的数字或状态标记。


## 演示
> 用于表示状态的小圆点。
:::demo
```html
<template>
  <x-badge status="success" />
  <x-badge status="error" />
  <x-badge status="default" />
  <x-badge status="warning" />
  <br />
  <x-badge status="success" text="success" />
  <br />
  <x-badge status="error" text="error" />
  <br />
  <x-badge status="default" text="default" />
  <br />
  <x-badge status="warning" text="warning" />
</template>
```
:::



## 闪耀
> 添加`shine`，开启闪耀徽标
:::demo
```html
<template>
  <x-badge shine status="success" />
  <x-badge shine status="error" />
  <x-badge shine status="default" />
  <x-badge shine status="warning" />
  <br />
  <x-badge shine status="success" text="success" />
  <br />
  <x-badge shine status="error" text="error" />
  <br />
  <x-badge shine status="default" text="default" />
  <br />
  <x-badge shine status="warning" text="warning" />
</template>
```
:::

## 独立使用
> 不包裹任何元素独立使用
:::demo
```html
<template>
  <x-badge count="24" />
</template>
```
:::
