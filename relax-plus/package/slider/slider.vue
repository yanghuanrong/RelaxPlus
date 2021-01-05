<template>
  <div class="x-slider">
    <tooltip :content="state" :move="true">
      <div 
        class="x-slider-dot"
        :style="{
          'transform': `translateX(${x}px)`
        }"
        @mousedown="down"
      >
      </div>
    </tooltip>
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
    const state = ref(modelValue.value)
    const total = ref(0)

    let w = 0
    onMounted(() => {
      const el = instance.vnode.el
      w = el.getBoundingClientRect().width - 12
      total.value = w / max.value
    })


    let touchX = 0
    const x = ref(0)
    const move = (e) => {
      e.preventDefault()

      let mx = e.screenX - touchX
      mx < 0 && (mx = 0)
      mx > w && (mx = w)
      x.value = mx
      state.value = parseInt(mx / total.value)
    }

    const down = (e) => {
      touchX = e.screenX - x.value
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', (e) => {
        document.removeEventListener('mousemove', move)
      })
    }
   

    // const up = () => {
    //   document.body.removeEventListener('mousemove', move)
    // }

    return {
      down,
      state,
      x,
    }
  }
}
</script>