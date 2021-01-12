<template>
  <div class="x-carousel" :style="`width:${width}; height: ${height}`">
    <div class="x-carousel-left" @click="setCarousel(-1, 'slide-left')">
      <i class="x-icon-chevron-left"></i>
    </div>
    <div class="x-carousel-right" @click="setCarousel(1, 'slide-right')">
      <i class="x-icon-chevron-right"></i>
    </div>
    <div class="x-carousel-warp">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, provide, reactive, ref, watchEffect } from 'vue'
import emitter from '../../utils/emiter'
import { isArray } from '../../utils/isType'

export default {
  name: 'Carousel',
  props: {
    width: String,
    height: String
  },
  setup(props, {slots}){
    const instance = getCurrentInstance()
    const inActive = ref(0)
    const inUid = ref(0)
    const items = reactive([])
    const transitionName = ref('slide-right')
    provide('carousel-active', inUid)
    provide('carousel-name', transitionName)
    const { on } = emitter()

    on('carousel-item', (uid) => {
      items.push(uid)
    })

    watchEffect(() => {
      inUid.value = items[inActive.value]
    })

    const setCarousel = (i, name) => {
      inActive.value += i
      transitionName.value = name

      if(inActive.value < 0){
        inActive.value = items.length - 1
      }
      if(inActive.value >= items.length){
        inActive.value = 0
      }
    }

    return {
      setCarousel
    }

  }
}
</script>