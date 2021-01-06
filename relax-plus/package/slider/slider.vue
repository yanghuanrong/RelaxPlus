<template>
  <div class="x-slider">
    <tooltip :content="start.num" :move="true">
      <div 
        class="x-slider-dot"
        :style="{
          'left': `${start.x}%`
        }"
        @mousedown="down"
      >
      </div>
    </tooltip>
    <div 
      class="x-slider-bar"
      :style="propress"
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
    const {modelValue, max, min} = toRefs(props)
    const instance = getCurrentInstance()
    const propress = reactive({})
    const space = ref(0)
    
    const start = reactive({
      num: modelValue.value
    })
    
    const end = reactive({})

    onMounted(() => {
      useSpace()
      useSlider()

      window.addEventListener('resize', () => {
        useSpace()
        useSlider()
      })
    })

    const useSpace = () => {
      const el = instance.vnode.el
      propress.maxWidth = el.getBoundingClientRect().width
      space.value = propress.maxWidth / (max.value - min.value)
    }

    const useSlider = () => {
      start.x = (start.num - min.value) / (max.value - min.value) * 100
      propress.width = start.x + '%'
    }

    const down = (e) => {
      const touchX = e.screenX - start.num * space.value + space.value * min.value
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', (e) => {
        document.removeEventListener('mousemove', move)
      })

      function move (e) {
        e.preventDefault()
        let mx = e.screenX - touchX
        mx < 0 && (mx = 0)
        mx > propress.maxWidth && (mx = propress.maxWidth)
        
        start.num = Math.round(mx / space.value) + min.value
        emit('update:modelValue', start.num)
        useSlider()
        
      }
    }

    return {
      down,
      start,
      propress
    }
  }
}
</script>