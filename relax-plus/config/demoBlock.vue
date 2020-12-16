<template>
  <div class="demo-block" :class="{show: isShow}">
    <div class="demo-source">
        <slot name="source"></slot>
    </div>
    <div class="demo-highlight">
      <div class="demo-icon">
        <div class="demo-icon__item" @click="handleCopy">
          <i class="x-icon-copy"></i>
          <!-- <i class="x-icon-check"></i> -->
        </div>
        <div class="demo-icon__item" @click="handleCode">
          <i class="x-icon-codepen"></i>
        </div>
      </div>
      
      <CollapseTransition>
        <div v-show="isShow">
          <slot name="highlight"></slot>
        </div>
      </CollapseTransition>
    </div>
  </div>
  <div class="tag-detail">
    <slot></slot>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
import CollapseTransition from '@RelaxPlus/package/transitions/collapse-transition.vue'
export default {
  components: {
    CollapseTransition
  },
  setup(){
    const internalInstance = getCurrentInstance()
    const isShow = ref(false)

    const handleCopy = useCopy.bind(this, internalInstance.ctx)

    const handleCode = () => {
      isShow.value = !isShow.value
    }


    return {
      isShow,
      handleCode,
      handleCopy,
    }
  }
}

const useCopy = (ctx) => {
  const html = ctx.$slots.highlight()[0]['children'][0]['children']
  copy(html)
}

function copy(value) {
    const oInput = document.createElement('textarea')
    document.body.appendChild(oInput)
    oInput.style.width = '0'
    oInput.style.height = '0'
    oInput.style.position = 'absolute'
    oInput.style.opacity = '0'
    oInput.value = value

    const ua = window.navigator.userAgent

    if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        oInput.focus();
        oInput.setSelectionRange(0, 9999);
        document.execCommand("copy");
    } else if (ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1) {
        oInput.select();
        document.execCommand("copy");
    } else {
        oInput.focus();
        oInput.setSelectionRange(0, 9999);
        document.execCommand("copy");
    }
    document.body.removeChild(oInput)
}
</script>