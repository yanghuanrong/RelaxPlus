<template>
  <div class="x-select">
    <div 
      class="x-select-input"
      @click="toggle"
      @mouseover="mouseover"
      @mouseout="mouseout"
    >
      <input readonly :value="state" :placeholder="placeholder" class="x-input" @focus="focus"/>
    
      <i class="x-arrow" v-show="!isClear" :class="{'is-active': isShow}"></i>
      <div class="x-clearable" v-show="isClear" key="1" @click.stop="clearable">
        <i class="x-icon-x"></i>
      </div>

    </div>

    <teleport to="body">
      <transition name="option">
        <div class="x-select-option" :style="rect" v-show="isShow">
          <slot></slot>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
import { onMounted, ref, getCurrentInstance, reactive, provide, toRefs } from 'vue';
import emitter from '../../utils/emiter'
export default {
  name: 'Select',
  props: {
    modelValue: [Array, String],
    placeholder: String
  },
  setup(props, {emit}){
    const currentInstance = getCurrentInstance()
    const {on} = emitter()
    const isFocus = ref(false)
    const isShow = ref(false)
    const state = ref('')
    const rect = reactive({
      top: ''
    })
    const {modelValue} = toRefs(props)
    
    provide('Select', currentInstance)

    on('selectOption', ({label, value}) => {
      emit('update:modelValue', value)
      state.value = label || value
      hide()
    })

    on('selectDefault', ({label, value}) => {
      if(modelValue.value === value){
        state.value = label || value
      }
    })

    const focus = (e) => {
      const el = e.target.getBoundingClientRect()
      const h = document.documentElement.scrollTop
      rect.top = el.top + el.height + h + 'px'
      rect.left = el.left + 'px'
      rect.minWidth = el.width + 'px'

      isFocus.value = true
    }

    const show = () => {
      isShow.value = true
      isFocus.value = true
    }
    const hide = () => {
      isShow.value = false
      isFocus.value = false
    }
    const toggle = () => {
      if (isFocus.value && isShow.value) {
        hide();
      } else {
        show();
      }
    }
    
    
    onMounted(() => {
      document.addEventListener("click", e => {
        const el = currentInstance.vnode.el
        if (!el.contains(e.target)) {
          hide()
        }
      })
    })

    const clearFn = useClear(state)

    const clearable = () => {
      state.value = ''
      emit('update:modelValue', '')
    }

    return {
      focus,
      toggle,
      state,
      rect,
      isShow,
      clearable,
      ...clearFn
    }
  }
}

function useClear(state) {
  const isClear = ref(false)
  const mouseover = () => {
    if (state.value.length) {
      isClear.value = true
    }
  }
  const mouseout = () => {
      isClear.value = false
  }

  return {
    isClear,
    mouseover,
    mouseout
  }
}


</script>