---
title: Notice 通知
tag: Feedback
---

# Notice 通知
> 全局展示通知提醒信息

## 普通通知
> 最简单的用法，`4.5` 秒后自动关闭。
:::demo `notice` 会被挂载在 `vue` 全局属性中, 当然也可以引入 `RelaxPlus` 直接使用
```html
<template>
   <x-button type='primary' @click="handerClick">显示普通通知</x-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$notice} = instance.appContext.config.globalProperties
      const handerClick = () => {
        $notice({
          title: '易',
          content: '真正的大师永远都怀着一颗学徒的心'
        })
      }
      return {
        handerClick
      }
    }
  }
</script>
```
:::


## 通知类型
> 不同的提示状态：信息、成功、警告、错误
:::demo
```html
<template>
   <x-button type="info" plain @click="open1">打开通知提示</x-button>
   <x-button type="success" plain  @click="open2">显示成功提示</x-button>
   <x-button type="warning" plain  @click="open3">显示警告提示</x-button>
   <x-button type="danger" plain  @click="open4">显示错误提示</x-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$notice} = instance.appContext.config.globalProperties

      const open1 = () => {
        $notice.info({
          title: '塞恩',
          content: '死后能做的最棒的事情是什么?就是碾碎你的敌人，看着他们先你一步而去，并聆听他们怯懦的哭喊。'
        })
      }
      const open2 = () => {
        $notice.success({
          title: '崔斯特',
          content: '每一张牌，都是对你的一份思念，我赌赢了所有，却赢不回你的爱。'
        })
      }
      const open3 = () => {
        $notice.warning({
          title: '努努',
          content: '不管是怎么样的天气，不管是什么样的环境，不管有什么样的危险，我的伙伴，雪人，一直都会陪着我。'
        })
      }
      const open4 = () => {
        $notice.error({
          title: '扭曲树精',
          content: '守护你是我最后的希望,束缚着的是思念,丢弃的是无奈,最后我会留下一个圈摆放你我的回忆,直到我也干枯,你也远去!'
        })
      }

      return {
        open1,
        open2,
        open3,
        open4,
      }
    }
  }
</script>
```
:::

## 仅显示标题
> `title` 为必填项
:::demo
```html
<template>
   <x-button type="primary" plain @click="handerClick">打开提醒(仅标题)</x-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$notice} = instance.appContext.config.globalProperties
      const handerClick = () => {
        $notice.warning({
          title: '吾虽浪迹天涯，却未迷失本心',
          duration: 10
        })
      }
      return {
        handerClick
      }
    }
  }
</script>
```
:::


## 自定义图标
> 填写 `icon` 属性，可以使用自己喜欢的图标
:::demo
```html
<template>
   <x-button type="primary" plain @click="handerClick1">显示自定义图标</x-button>
   <x-button type="primary" plain @click="handerClick2">显示自定义图标</x-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$notice} = instance.appContext.config.globalProperties

      const handerClick1 = () => {
        $notice.error({
          icon: 'x-icon-heart-on',
          title: '吾之初心，永世不忘',
          duration: 20
        })
      }

      const handerClick2 = () => {
        $notice.info({
          icon: 'x-icon-cloud-rain',
          title: '面对疾风吧！',
          duration: 20
        })
      }

      return {
        handerClick1,
        handerClick2,
      }
    }
  }
</script>
```
:::

## 手动关闭
> 自定义时长，为 `0` 则不自动关闭
:::demo
```html
<template>
   <x-button type="primary" plain @click="handerClick">手动关闭</x-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$notice} = instance.appContext.config.globalProperties
      const handerClick = () => {
        $notice.success({
          title: '瑞文',
          content: '纵然前路迷茫，纵然天隔一方，纵然我手中的刀刃已然破碎，也无法阻挡我寻找你的道路。',
          duration: 0
        })
      }
      return {
        handerClick
      }
    }
  }
</script>
```
:::
