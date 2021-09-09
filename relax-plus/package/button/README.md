---
title: Button 按钮
tag: General
---

# Button 按钮

> 帅气的 Button

## 演示

> 按钮可以根据 `type` 来设置不同的颜色，提供了 6 种类型的按钮 `primary` `success` `info` `danger` `warning`

:::demo

```html
<template>
  <x-button type="default"> default </x-button>
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
  <x-button type="default" plain> default </x-button>
  <x-button type="warning" plain> warning </x-button>
  <x-button type="primary" plain> primary </x-button>
  <x-button type="success" plain> success </x-button>
  <x-button type="info" plain> info </x-button>
  <x-button type="danger" plain> danger </x-button>
</template>
```

:::

## 圆角按钮

> 设置 `round` 属性可以设置圆角按钮

:::demo

```html
<template>
  <x-button type="default" round plain> default </x-button>
  <x-button type="warning" round> warning </x-button>
  <x-button type="primary" round plain> primary </x-button>
  <x-button type="success" round> success </x-button>
  <x-button type="info" round plain> info </x-button>
  <x-button type="danger" round> danger </x-button>
</template>
```

:::

## 加载中状态

> 添加 `loading` 属性即可让按钮处于加载状态

:::demo

```html
<template>
  <x-button type="warning" size="sm" round :loading="true">loading</x-button>
  <x-button type="danger" round :loading="true">loading</x-button>
  <x-button type="info" round plain :loading="true">loading</x-button>
  <x-button
    type="success"
    plain
    :loading="loading1"
    @click="handerClick1"
    icon="x-icon-heart-on"
    >loading</x-button
  >
  <x-button type="primary" :loading="loading2" @click="handerClick2"
    >Click loading</x-button
  >
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const loading1 = ref(false);
      const loading2 = ref(false);

      const handerClick1 = () => {
        loading1.value = true;

        setTimeout(() => {
          loading1.value = false;
        }, 3000);
      };

      const handerClick2 = () => {
        loading2.value = true;

        setTimeout(() => {
          loading2.value = false;
        }, 3000);
      };

      return {
        loading1,
        loading2,
        handerClick1,
        handerClick2,
      };
    },
  };
</script>
```

:::

## 托管加载状态

> 你只需要返回一个 `promise`，组件会托管 `loading`，这在发送请求的时候有奇效

:::demo

```html
<template>
  <x-button type="warning" @click="handlePromise">loading</x-button>
</template>
<script>
  export default {
    setup() {
      const handlePromise = () =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });

      return {
        handlePromise,
      };
    },
  };
</script>
```

:::

## 不可点击

> 设置 `disabled` 属性达到按钮不可点击状态

:::demo

```html
<template>
  <x-button plain round disabled>default</x-button>
  <x-button type="primary" plain round disabled>primary</x-button>
  <x-button type="success" plain round disabled>success</x-button>
  <x-button type="info" plain round disabled>info</x-button>
  <x-button type="danger" round disabled>danger</x-button>
  <x-button type="warning" disabled>warning</x-button>
</template>
```

:::

## 按钮尺寸

> 按钮根据`size`来变换尺寸，提供了 `sm` `md` `lg`三种，默认是`md`

:::demo

```html
<template>
  <x-button type="primary" size="sm">small</x-button>
  <x-button type="warning" size="md">default</x-button>
  <x-button type="danger" size="lg">large</x-button>
</template>
```

:::

## 图标按钮

> 圆形的图标按钮

:::demo

```html
<template>
  <x-button icon="x-icon-heart-on" circle></x-button>
  <x-button type="primary" icon="x-icon-x" circle></x-button>
  <x-button type="info" icon="x-icon-mic" circle></x-button>
  <x-button type="danger" icon="x-icon-music" circle></x-button>
  <x-button type="warning" icon="x-icon-thumbs-down" circle></x-button>
  <x-button type="success" icon="x-icon-thumbs-up" circle></x-button>
</template>
```

:::

## 图标按钮

> 有文字信息的图标按钮

:::demo

```html
<template>
  <x-button icon="x-icon-home">default</x-button>
  <x-button type="primary" icon="x-icon-star-on">primary</x-button>
  <x-button type="success" icon="x-icon-search">success</x-button>
  <x-button type="info" icon="x-icon-user">info</x-button>
  <x-button type="danger" icon="x-icon-zap">danger</x-button>
  <x-button type="warning" icon="x-icon-triangle">warning</x-button>
</template>
```

:::

## 块级按钮

> 设置 `block` 属性变成块级按钮

:::demo

```html
<template>
  <x-button type="success" icon="x-icon-heart-on" round block>success</x-button>
  <x-button type="warning" icon="x-icon-star-on" block>warning</x-button>
  <x-button type="primary" plain block>primary</x-button>
</template>
```

:::
