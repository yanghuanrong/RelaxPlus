---
title: Modal 对话框
tag: Feedback
---

# Modal 对话框
> 模态对话框

## 基础用法
> 使用 `v-model` 控制打开关闭
:::demo
```html
<template>
  <x-button type="primary" @click="visible = true">显示对话框</x-button>
  <x-modal 
    title="戏命师"
    v-model="visible" 
    @ok="ok"
    @cancel="cancel"
  >
    <p>我于杀戮之中绽放 ,亦如黎明中的花朵</p>
    <p>你，将饱含诗意。我的灵感正在涌现，作品即是一切，艺术值得为之痛苦，我为喝彩而生，你将为其呕心沥血。</p>
  </x-modal>
</template>

<script>
  import {ref, getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$message} = instance.appContext.config.globalProperties
      const visible = ref(false)

      const ok = () => {
        $message.success('点击了确定')
      }

      const cancel = () => {
        $message('点击了取消')
      }
 
      return {
        visible,
        ok,
        cancel
      }
    }
  }
</script>
```
:::


## 异步关闭
> 给 `Modal` 添加属性 `loading` 后，点击确定后异步关闭对话框。
:::demo
```html
<template>
  <x-button type="primary" plain @click="visible = true">显示对话框</x-button>
  <x-modal 
    title="戏命师"
    v-model="visible"
    :loading="loading"
    @ok="ok"
  >
    <p>我于杀戮之中绽放 ,亦如黎明中的花朵</p>
    <p>你，将饱含诗意。我的灵感正在涌现，作品即是一切，艺术值得为之痛苦，我为喝彩而生，你将为其呕心沥血。</p>
  </x-modal>
</template>

<script>
  import {ref, getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$message} = instance.appContext.config.globalProperties
      const visible = ref(false)
      const loading = ref(false)

      const ok = () => {
        loading.value = true
        setTimeout(() => {
          loading.value = false
        }, 2000)
      }

      return {
        visible,
        loading,
        ok,
      }
    }
  }
</script>
```
::: 