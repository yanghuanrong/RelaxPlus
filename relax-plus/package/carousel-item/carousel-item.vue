<template>
  <transition :name="inName" mode="out-in">
    <div class="x-carousel-item" v-show="isShow">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { computed, getCurrentInstance, inject } from 'vue'
import emitter from '../../utils/emiter'
import {isArray} from '../../utils/isType'
export default {
  name: 'CarouselItem',
  setup(){
    const inActive = inject('carousel-active')
    const inName = inject('carousel-name')
    const instance = getCurrentInstance()
    const { dispatch } = emitter()
    dispatch('carousel-item', instance.uid)

    const isShow = computed(() => (inActive.value === instance.uid))

    return {
      isShow,
      inName
    }
  }
}
</script>