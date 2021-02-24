---
title: Menu 导航菜单
tag: Navigation

---

# Menu 导航菜单
> 为页面和功能提供导航的菜单列表


## 演示
> 垂直菜单，可内嵌子菜单，目前仅支持二级菜单
:::demo
```html
<template>
  <x-menu style="width: 256px" >
    <x-menu-item name="1">导航一</x-menu-item>
    <x-sub-menu name="2">
      <template #title>导航二</template>
      <x-menu-item-group title="小标题">
        <x-menu-item name="2-1">子菜单一</x-menu-item>
        <x-menu-item name="2-2">子菜单二</x-menu-item>
      </x-menu-item-group>
    </x-sub-menu>
    <x-sub-menu name="3">
      <template #title>导航三</template>
      <x-menu-item-group>
        <x-menu-item name="3-1">子菜单一</x-menu-item>
        <x-menu-item name="3-2">子菜单二</x-menu-item>
      </x-menu-item-group>
    </x-sub-menu>
    <x-menu-item name="4">导航四</x-menu-item>
  </x-menu>
</template>
```
:::


## 只展开当前菜单
> 点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁
:::demo
```html
<template>
  <x-menu style="width: 256px" :uniqueOpened="true">
    <x-menu-item name="1">导航一</x-menu-item>
    <x-sub-menu name="2">
      <template #title>导航二</template>
      <x-menu-item-group title="小标题">
        <x-menu-item name="2-1">子菜单一</x-menu-item>
        <x-menu-item name="2-2">子菜单二</x-menu-item>
      </x-menu-item-group>
    </x-sub-menu>
    <x-sub-menu name="3">
      <template #title>导航三</template>
      <x-menu-item-group>
        <x-menu-item name="3-1">子菜单一</x-menu-item>
        <x-menu-item name="3-2">子菜单二</x-menu-item>
      </x-menu-item-group>
    </x-sub-menu>
    <x-menu-item name="4">导航四</x-menu-item>
  </x-menu>
</template>
```
:::



