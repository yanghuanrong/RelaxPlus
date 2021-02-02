<template>
  <transition 
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="beforeEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <slot></slot>
  </transition>
</template>

<script>
export default {
  setup(){
    const beforeEnter = (el) => {
      el.style.transition = 'height .4s ease'
      el.style.overflow = 'hidden'
      el.style.height = el.scrollHeight + 'px'
    }
    const enter = (el) => {
      el.style.height = el.scrollHeight + 'px'
    }

    const afterEnter = (el) => {
      el.style.height = el.scrollHeight + 'px'
      el.style.overflow = 'hidden'
    }

    const beforeLeave = (el) => {
      el.style.height = el.scrollHeight + 'px'
    }
    const leave = (el) => {
      el.style.transition = 'height .4s ease'
      if(el.scrollHeight !== 0) {
          el.style.height = 0
      }
    }
    const afterLeave = (el) => {
      el.style.height = el.scrollHeight + 'px'
      el.style.overflow = ''
    }

    return {
      beforeEnter,
      enter,
      afterEnter,
      beforeLeave,
      leave,
      afterLeave
    }
  }
}
</script>