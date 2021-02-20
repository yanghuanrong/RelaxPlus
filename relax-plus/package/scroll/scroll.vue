<template>
  <div class="x-scroll" :style="{
    height: `${viewHeight}px`
  }">
    <div 
      class="x-scroll-content"
      :style="{
        paddingRight: `${size}px`
      }"
      @scroll="viewScroll">
      <slot></slot>
    </div>
    <div
      class="x-scroll-bar"
      :style="{
        width: `${size}px`,
      }"
      @mousedown="thumbDrag($event)"
    >
      <div
        class="x-scroll-thumb" 
        ref="thumb"
        :style="{
          height: `${BarHeight}px`,
          top: `${BarTop}px`,
          borderRadius: `${size}px`
        }">
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, onUnmounted, ref, toRefs } from 'vue'
export default {
  name: "Scroll",
  props: {
    height: Number,
    size: {
      type: Number,
      default: 6
    }
  },
  emits: ['onScroll'],
  setup(props, {emit}){
    const instance = getCurrentInstance()
    const BarHeight = ref(30)
    const BarTop = ref(0)
    const thumb = ref(null)
    const {height} = toRefs(props)
    const viewHeight = ref(0)

    const viewScroll = () => {
      const el = instance.vnode.el
      const view = el.children[0]
      const catchTop = view.scrollTop / (view.scrollHeight - view.offsetHeight)
      BarTop.value = catchTop * (view.offsetHeight - thumb.value.offsetHeight)
      emit('onScroll', catchTop)
    }

    let observer
    onMounted(() => {
      const el = instance.vnode.el

      if(height){
        viewHeight.value = height.value
      } else {
        viewHeight.value = el.parentNode.offsetHeight
      }

      observer = new MutationObserver(() => {
        BarHeight.value = el.offsetHeight * el.offsetHeight / el.children[0].scrollHeight
        if(BarHeight.value <= 30) {
          BarHeight.value = 30
        }
      });

      observer.observe(el, {
        childList: true, // 子节点的变动（新增、删除或者更改）
        attributes: true, // 属性的变动
        characterData: true, // 节点内容或节点文本的变动
        subtree: true // 是否将观察器应用于该节点的所有后代节点
      });

      if(el.offsetHeight <= el.children[0].scrollHeight) {
        BarHeight.value = 0
      }
    })

    onUnmounted(() => {
      observer.disconnect();
    })

    const thumbDrag = (e) => {
      e.preventDefault()
      const el = instance.vnode.el
      const view = el.children[0]
      const touchY = e.clientY - BarTop.value
      const element = e.target

      if(element.className === 'x-scroll-bar') {
        const top = e.clientY - element.getBoundingClientRect().top
        view.scrollTop = view.scrollHeight * ( top / element.offsetHeight ) - element.offsetHeight / 2
      } else {
        const move = (ev) => {
            const bt = (ev.clientY - touchY) / (view.offsetHeight - thumb.value.offsetHeight)
            const top = (view.scrollHeight - view.offsetHeight) * bt
            view.scrollTop = top
        }
        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', () => {
          document.removeEventListener('mousemove', move)
        })
      }

    }

    return {
      BarHeight,
      BarTop,
      viewScroll,
      thumb,
      viewHeight,
      thumbDrag
    }

  }
}
</script>
