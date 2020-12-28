<template>
  <div class="x-select">
    <div 
      class="x-select-input"
      @click.prevent="toggle"
      @mouseover="mouseover"
      @mouseout="mouseout"
    >

      <div class="x-select-array">
        <template v-if="multiple">
        <div class="x-select-array-content" v-if="state.length">
          <span class="x-con-array">{{state[0]}}</span>
          <span class="x-clearable-array">
            <i class="x-icon-x"></i>
          </span>
        </div>
        <span v-if="state.length > 1">+ {{state.length - 1}}</span>
        </template>
        <div v-if="!multiple && state.length ">{{state}}</div>
      </div>

      <input readonly :placeholder="state.length ? '' : placeholder" class="x-input" @focus="focus"/>
    
      <i class="x-arrow"  :class="{'is-active': isShow}"></i>
      <!-- <div class="x-clearable" v-show="isClear" key="1" @click.stop="clearable">
        <i class="x-icon-x"></i>
      </div> -->

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
import { onMounted, ref, getCurrentInstance, reactive, provide, toRefs, computed, nextTick } from 'vue';
import emitter from '../../utils/emiter'
export default {
  name: 'Select',
  props: {
    modelValue: [Array, String],
    placeholder: String
  },
  setup(props, {emit}){
    
    provide('Select', getCurrentInstance())

    const {focus, rect} = useRect()
    const {toggle, isShow, hide} = useToggle()


    const multiple = computed(() => (Object.prototype.toString.call(props.modelValue) === '[object Array]'))
    const state = multiple.value ? reactive([]) : ref('')
    const {on} = emitter()
    on('selectOption', ({label, value, checked}) => {
      emit('update:modelValue', value)

      if(multiple.value){
        const labelIndex = state.indexOf(label)
        labelIndex === -1 && checked === true && state.unshift(label)
        labelIndex !== -1 && checked === false && state.splice(labelIndex, 1)
      } else {
        state.value = label
        hide()
      }
    })
    on('selectDefault', ({label, value, checked}) => {
      if(checked){
        if(multiple.value) {
          state.unshift(label)
        } else {
          state.value = label
        }
      }
    })

    // const clearFn = useClear()

    const clearable = () => {
      // state.value = ''
      emit('update:modelValue', '')
    }


    return {
      focus,
      rect,
      multiple,
      state,

      toggle,
      isShow,
      clearable,
      // ...clearFn
    }
  }
}

function useClear(state) {
  const isClear = ref(false)
  const mouseover = () => {
    // if (state.value.length) {
    //   isClear.value = true
    // }
  }
  const mouseout = () => {
      // isClear.value = false
  }

  return {
    isClear,
    mouseover,
    mouseout
  }
}

function useRect(){
  const rect = reactive({})
  const focus = (e) => {
    const el = e.target.getBoundingClientRect()
    const h = document.documentElement.scrollTop
    rect.top = el.top + el.height + h + 'px'
    rect.left = el.left + 'px'
    rect.minWidth = el.width + 'px'
  }

  return {
    rect,
    focus
  }
}

function useToggle(){
   const isShow = ref(false)
  const show = () => {
    isShow.value = true
  }
  const hide = () => {
    isShow.value = false
  }
  const toggle = () => {
    if (isShow.value) {
      hide();
    } else {
      show();
    }
  }
  onMounted(() => {
    const currentInstance = getCurrentInstance()
    document.addEventListener("click", e => {
      const el = currentInstance.vnode.el
      if (!el.contains(e.target)) {
        hide()
      }
    })
  })

  return {
    toggle,
    isShow,
    hide,
  }
}


</script>