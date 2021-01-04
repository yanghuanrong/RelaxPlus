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
          <span class="x-clearable-array" @click.stop="handelClear">
            <i class="x-icon-x"></i>
          </span>
        </div>
        <span v-if="state.length > 1">+ {{state.length - 1}}</span>
        </template>
        <div v-if="!multiple && state.length ">{{state}}</div>
      </div>

      <input 
        readonly 
        :placeholder="state.length ? '' : placeholder"
        class="x-input" 
        :class="{
          'is-focus': isShow,
          'is-blur': !isShow,
        }"
        @focus="focus"
      />
    
      <i class="x-arrow" v-show="!isClear" :class="{'is-active': isShow}"></i>
      <div class="x-clearable" v-show="isClear" @click.stop="handelClear">
        <i class="x-icon-x"></i>
      </div>

    </div>

    <teleport to="body">
      <transition name="scaleY" ref="option">
        <div class="x-select-option" @click.stop :style="rect" v-show="isShow">
          <div class="x-select-search" v-if="search">
            <div class="x-from-input x-input-icon-before" >
              <i class="x-before x-icon-search"></i>
              <input
                class="x-input x-input-sm"
                v-model="searchValue"
                @click.stop
              />
            </div>
          </div>
          <div class="x-select-item">
            <slot></slot>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
import { onMounted, ref, getCurrentInstance, reactive, provide, computed, onUnmounted, watch } from 'vue';
import emitter from '../../utils/emiter'
export default {
  name: 'Select',
  props: {
    modelValue: [Array, String],
    placeholder: String,
    search: [String, Boolean]
  },
  setup(props, {emit}){
    
    provide('Select', getCurrentInstance())

    const {toggle, isShow, hide, searchValue} = useToggle()
    const {focus, rect, option} = useRect(isShow)

    const multiple = computed(() => (Object.prototype.toString.call(props.modelValue) === '[object Array]'))
    const state = multiple.value ? reactive([]) : ref('')

    const {on, broadcast} = emitter()
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

    const clear = useClear(state, multiple.value)

    const handelClear = () => {
      if(multiple.value){
        const modelValue = props.modelValue
        modelValue.pop()
        state.shift() // state 用的unshift插入 所以需要从第一个开始删
        emit('update:modelValue', modelValue)
      } else {
        state.value = ''
        emit('update:modelValue', '')
      }
    }

    if(props.search){
      let time
      watch(searchValue, (value) => {
        clearTimeout(time)
        time = setTimeout(() => {
          broadcast('search', value)
        }, 100)
      })
    }

    return {
      focus,
      rect,
      multiple,
      state,
      option,
      searchValue,

      toggle,
      isShow,
      handelClear,
      ...clear
    }
  }
}


function useClear(state, multiple) {
  const isClear = ref(false)

  const mouseover = () => {
    if (!multiple && state.value.length) {
      isClear.value = true
    }
  }
  const mouseout = () => {
    if(!multiple){
      isClear.value = false
    }
  }
  
  return {
    isClear,
    mouseover,
    mouseout
  }
}

function useRect(isShow){
  const rect = reactive({})
  const option = ref(null)
  const clientHeight = document.documentElement.clientHeight

  let elHeight = 0
  let top1 = 0
  let top2 = 0
  let parent = null

  const focus = (e) => {
    parent = e.target
    const el = e.target.getBoundingClientRect()
    const scrollTop = document.documentElement.scrollTop
    const parentHeight = el.top + el.height

    top1 = parentHeight + scrollTop
    top2 = top1 - elHeight - el.height - 5
 
    const top = parentHeight + elHeight > clientHeight ? top2 : top1
    rect.transformOrigin = parentHeight + elHeight > clientHeight ? 'center bottom' : 'center top'
    rect.top = top + 'px'
    rect.left = el.left + 'px'
    rect.minWidth = el.width + 'px'
    rect.minHeight = elHeight + 'px'
  }

  onMounted(() => {
    const el = option.value
    el.style.top = "-100%"
    el.style.display = "block"
    elHeight = el.offsetHeight
    el.style.top = ""
    el.style.display = "none"
    
    window.addEventListener('scroll', () => {
      if(isShow.value && parent) {
        const Rect = parent.getBoundingClientRect()
        const scrollTop = document.documentElement.scrollTop

        if(Rect.top + Rect.height + elHeight > clientHeight){
          rect.top = top2 + 'px'
          rect.transformOrigin = 'center bottom'
        } else {
          rect.top = top1 + 'px'
          rect.transformOrigin = 'center top'
        }
      }
    })

  })

  return {
    rect,
    option,
    focus
  }
}

function useToggle(){
   const isShow = ref(false)
  const searchValue = ref('')

  const show = () => {
    searchValue.value = ''
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

  const currentInstance = getCurrentInstance()
  const isHide = (e) => {
    const el = currentInstance.vnode.el
    if (!el.contains(e.target)) {
      hide()
    }
  }
  onMounted(() => {
    document.addEventListener("click", isHide)
  })
  onUnmounted(() => {
    document.removeEventListener("click", isHide)
  })

  return {
    toggle,
    isShow,
    hide,
    searchValue
  }
}


</script>