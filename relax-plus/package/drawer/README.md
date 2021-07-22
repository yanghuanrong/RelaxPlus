---
title: Drawer 抽屉
tag: Feedback
---

# Drawer 抽屉

> 屏幕边缘滑出的浮层面板

## 演示

:::demo

```html
<template>
  <x-button type="primary" @click="visible = true">打开</x-button>
  <x-Drawer title="标题" v-model="visible" @close="cancel" @ok="ok">
    default
  </x-Drawer>
</template>

<script>
  import { ref, getCurrentInstance } from 'vue';
  export default {
    setup() {
      const instance = getCurrentInstance();
      const { $message } = instance.appContext.config.globalProperties;
      const visible = ref(false);

      const ok = () => {
        $message.success('点击了确定');
      };

      const cancel = () => {
        $message('点击了取消');
      };

      return {
        visible,
        ok,
        cancel,
      };
    },
  };
</script>
```

:::
