---
title: Modal 对话框
tag: Feedback
---

# Modal 对话框
> 模态对话框

## 演示
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

## 自定义样式
> 通过 `slot` 自定义样式
:::demo
```html
<template>
  <x-button type="primary" plain @click="visible1 = true">自定义页头页脚</x-button>
  <x-modal v-model="visible1" style="width: 300px">
    <template #head>
      <div style="text-align: center">
        这个组件
        <x-icon type="x-icon-thumbs-up" />
      </div>
    </template>
    <p>我于杀戮之中绽放 ,亦如黎明中的花朵</p>
    <p>你，将饱含诗意。我的灵感正在涌现，作品即是一切，艺术值得为之痛苦，我为喝彩而生，你将为其呕心沥血。</p>
    <template #footer>
      <x-button type="warning" block @click="visible1 = false">确定</x-button>
    </template>
  </x-modal>

  <x-button type="primary" plain @click="visible2 = true">不带标题</x-button>
  <x-modal v-model="visible2">
    <p>吾虽浪迹天涯，却未迷失本心</p>
    <p>吾之初心，永世不忘</p>
    <p>正义，好个冠冕堂皇之词</p>
  </x-modal>
</template>

<script>
  import {ref} from 'vue'
  export default {
    setup(){
      const visible1 = ref(false)
      const visible2 = ref(false)

      return {
        visible1,
        visible2,
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
  import {ref} from 'vue'
  export default {
    setup(){
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

## 禁用关闭
> 可以禁用关闭和遮罩层关闭。
:::demo
```html
<template>
  <x-button type="primary" @click="visible1 = true">禁用右上角关闭 （含Esc键）</x-button>
  <x-modal 
    title="戏命师"
    :closable="false"
    v-model="visible1" 
  >
    <p>我于杀戮之中绽放 ,亦如黎明中的花朵</p>
    <p>你，将饱含诗意。我的灵感正在涌现，作品即是一切，艺术值得为之痛苦，我为喝彩而生，你将为其呕心沥血。</p>
  </x-modal>

  <x-button type="primary" @click="visible2 = true">禁用遮罩层关闭</x-button>
  <x-modal 
    title="戏命师"
    :mask-closable="false"
    v-model="visible2" 
  >
    <p>我于杀戮之中绽放 ,亦如黎明中的花朵</p>
    <p>你，将饱含诗意。我的灵感正在涌现，作品即是一切，艺术值得为之痛苦，我为喝彩而生，你将为其呕心沥血。</p>
  </x-modal>
</template>

<script>
  import {ref} from 'vue'
  export default {
    setup(){
      const visible1 = ref(false)
      const visible2 = ref(false)

      return {
        visible1,
        visible2,
      }
    }
  }
</script>
```
:::



## 实例化方法
> 不同的状态：信息、成功、警告、错误
:::demo
```html
<template>
  <x-button type="info" plain @click="open('info')">显示信息对话框</x-button>
  <x-button type="danger" plain @click="open('error')">显示错误对话框</x-button>
  <x-button type="success" plain @click="open('success')">显示成功对话框</x-button>
  <x-button type="warning" plain @click="open('warning')">显示警告对话框</x-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$modal} = instance.appContext.config.globalProperties

      const open = (type) => {
        $modal[type]({
          title: '戏命师',
          content: '你，将饱含诗意。我的灵感正在涌现，作品即是一切，艺术值得为之痛苦，我为喝彩而生，你将为其呕心沥血。'
        })
      }

      return {
        open
      }
    }
  }
</script>
```
:::

## 确认对话框
> 设置 `okText` 与 `cancelText` 以自定义按钮文字
:::demo 设置`onOk` 与 `onCancel` 拿到按钮回调
```html
<template>
  <x-button type="primary" @click="open">显示确认对话框</x-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$modal, $message} = instance.appContext.config.globalProperties

      const open = (type) => {
        $modal.confirm({
          title: '你确定删除吗',
          content: '删除之后，这个操作不可逆',
          cancelText: 'No',
          okText: 'Yes',
          onOk(){
            $message('点击了确定')
          },
          onCancel(){
            $message('点击了取消')
          }
        })
      }

      return {
        open
      }
    }
  }
</script>
```
:::
