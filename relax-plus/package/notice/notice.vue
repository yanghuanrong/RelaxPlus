<template>
  <transition 
    name="notice" 
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave" 
    appear
  >
    <div class="x-notice-content-rect" v-show="isShow">
      <div class="x-notice-content">
        <div class="x-notice-bar" v-if="duration" :class="type">
          <i :style="{width: bar + '%'}"></i>
        </div>
        <span class="x-notice-icon" v-if="type">
          <i :class="[
            icon || iconType[type],
            type
          ]"/>
        </span>
        <div class="x-notice-title">{{title}}</div>
        <div class="x-notice-description" v-if="content">{{content}}</div>
        <span class="x-notice-close" @click="close">
          <i class="x-icon-x"></i>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
import {ref, getCurrentInstance} from 'vue'
export default {
  name: "Notice",
  props: {
    icon: String,
    title: String,
    content: String,
    type: String,
    duration: {
      type: Number,
      default: 4.5
    }
  },
  setup(props){
    const {title, content, type , duration, icon} = props
    const instance = getCurrentInstance()
    const isShow = ref(true)
    const bar = ref(0)

    if(duration > 0) {
      // setTimeout(close, duration * 1000)
      let s = 100
      const t = duration * 1000
      const time = setInterval(() => {
        if(s <= t){
          bar.value = s / t * 100
          s += 100
        } else {
          clearInterval(time)
          close()
        }
      }, 100);
    }

    function close() {
      isShow.value = false
    }

    const beforeLeave = (el) => {
      el.style.height = el.offsetHeight + 'px'
    }
    const leave = (el) => {
      el.style.transition = 'all .4s ease'
      
      if(el.offsetHeight !== 0) {
          el.style.height = 0
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
      }
    }
    const afterLeave = (el) => {
      el.style.height = el.offsetHeight + 'px'
      el.style.overflow = ''
      // instance.vnode.el.parentElement?.removeChild(instance.vnode.el)
    }

    const iconType = {
      info: "x-icon-info",
      error: "x-icon-x-circle",
      success: "x-icon-check-circle",
      warning: "x-icon-alert-triangle",
    }
    
    return {
      iconType,
      type,
      title,
      content,
      isShow,
      close,
      bar,
      duration,
      icon,

      beforeLeave,
      leave,
      afterLeave,
    }
  }
};
</script>
