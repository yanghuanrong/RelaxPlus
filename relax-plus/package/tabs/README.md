---
title: Tabs 标签页
tag: Data Display
---

# Tabs 标签页
> 选项卡切换组件。

## 演示
> 默认
:::demo
```html
<template>
  <x-tabs>
    <x-tab-pane label="Tab 1">
      这是选项卡1
    </x-tab-pane>
    <x-tab-pane label="Tab 2">
      这是选项卡2
    </x-tab-pane>
  </x-tabs>
</template>
```
:::

## 禁用
> 禁用不可点击的tab
:::demo
```html
<template>
  <x-tabs>
    <x-tab-pane label="Tab 1">
      这是选项卡1
    </x-tab-pane>
    <x-tab-pane label="Tab 2" disabled>
      这是选项卡2
    </x-tab-pane>
    <x-tab-pane label="Tab 3">
      这是选项卡3
    </x-tab-pane>
  </x-tabs>
</template>
```
:::