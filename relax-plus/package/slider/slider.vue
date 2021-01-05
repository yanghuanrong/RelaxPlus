<template>
  <div class="x-slider">
    <tooltip :content="start" :move="true">
      <div 
        class="x-slider-dot"
        :style="{
          'transform': `translateX(${x}px)`
        }"
        @mousedown="down"
      >
      </div>
    </tooltip>
    <div 
      class="x-slider-bar"
      v-if="progress"
      :style="{
        width: x + 6 + 'px'
      }"
    ></div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, getCurrentInstance, onMounted } from 'vue'
import tooltip from '../tooltip/index'

export default {
  name:'Slider',
  components: {
    tooltip
  },
  props: {
    modelValue: [Number, Array],
    progress: Boolean,
    max: {
      type: Number,
      default: 100,
    },
    min: {
      type: Number,
      default: 0,
    },
  },
  setup(props, {emit}){
    const {modelValue, max} = toRefs(props)
    const instance = getCurrentInstance()

    const start = ref(modelValue.value)
    const space = ref(0)

    let w = 0
    onMounted(() => {
      scalcSpace()
      scalcDot()
    })

    window.addEventListener('resize', () => {
      scalcSpace()
      scalcDot()
    })

    const scalcSpace = () => {
      const el = instance.vnode.el
      w = el.getBoundingClientRect().width - 12
      space.value = w / max.value
    }

    const scalcDot = () => {
      x.value = start.value * space.value
    }

  
    let touchX = 0
    const x = ref(0)
    const move = (e) => {
      e.preventDefault()
      let mx = e.screenX - touchX
      mx < 0 && (mx = 0)
      mx > w && (mx = w)
      start.value = parseInt(mx / space.value)
      emit('update:modelValue', start.value)
      scalcDot()
    }

    const down = (e) => {
      touchX = e.screenX - x.value
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', (e) => {
        document.removeEventListener('mousemove', move)
      })
    }

    return {
      down,
      start,
      x,
    }
  }
}
</script>