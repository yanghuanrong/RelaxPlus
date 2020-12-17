<template>
  <transition name="slideY-fade" @after-leave="close" appear>
    <div class="x-message" v-show="isShow">
      <span><i :class="icon[type]"/>{{content}}</span>
    </div>
  </transition>
</template>

<script>
import {ref, getCurrentInstance} from 'vue'
export default {
  name: "Message",
  props: {
    content: String,
    type: String,
    duration: {
      type: Number,
      default: 1.5
    }
  },
  setup(props){
    const isShow = ref(true)
    const instance = getCurrentInstance()
    const {content} = props

    setTimeout(() => {
      isShow.value = false
    }, 1500)

    const close = () => {
      instance.vnode.el.parentElement?.removeChild(instance.vnode.el)
    }

    const icon = {
      info: "x-icon-info info",
      error: "x-icon-x-circle error",
      success: "x-icon-check-circle success",
      warning: "x-icon-alert-triangle warning",
      loading: "x-icon-loader loading"
    }

    return {
      icon,
      isShow,
      content,
      close
    }
  }
};
</script>
