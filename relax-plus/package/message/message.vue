<template>
  <transition name="slideY-fade" @after-leave="afterLeave" appear>
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
    content: [String, Number, Boolean],
    type: String,
    duration: {
      type: Number,
      default: 1.5
    }
  },
  setup(props){
    const {duration} = props
    const instance = getCurrentInstance()

    const isShow = ref(true)
    
    if(duration > 0) {
      setTimeout(close, duration * 1000)
    }

    function close() {
      isShow.value = false
    }
 
    const afterLeave = () => {
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
      close,
      afterLeave
    }
  }
};
</script>
