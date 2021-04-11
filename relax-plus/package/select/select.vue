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
            <span class="x-con-array">{{ state[0] }}</span>
            <span class="x-clearable-array" @click.stop="handelClear">
              <i class="x-icon-x"></i>
            </span>
          </div>
          <span v-if="state.length > 1">+ {{ state.length - 1 }}</span>
        </template>
        <div v-if="!multiple && state.length">{{ state }}</div>
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

      <i class="x-arrow" v-show="!isClear" :class="{ 'is-active': isShow }"></i>
      <div class="x-clearable" v-show="isClear" @click.stop="handelClear">
        <i class="x-icon-x"></i>
      </div>
    </div>

    <teleport to="body">
      <transition name="scaleY" ref="trigger">
        <div
          class="x-trigger x-select-option"
          @click.stop
          :style="rect"
          v-show="isShow"
        >
          <div class="x-select-search" v-if="search">
            <div class="x-from-input x-input-icon-before">
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
import {
  ref,
  getCurrentInstance,
  reactive,
  provide,
  computed,
  watch,
} from 'vue'
import useToggle from '../../utils/togger'
import emitter from '../../utils/emiter'
import { isArray } from '../../utils/isType'

export default {
  name: 'Select',
  props: {
    modelValue: [Array, String],
    placeholder: String,
    search: [String, Boolean],
  },
  setup(props, { emit }) {
    provide('Select', getCurrentInstance())

    const { toggle, isShow, focus, rect, trigger, hide } = useToggle()

    const searchValue = ref('')
    watch(isShow, (value) => {
      if (value) {
        searchValue.value = ''
      }
    })

    const multiple = computed(() => isArray(props.modelValue))
    const state = multiple.value ? reactive([]) : ref('')

    const { on, broadcast } = emitter()
    on('selectOption', ({ label, value, checked }) => {
      emit('update:modelValue', value)

      if (multiple.value) {
        const labelIndex = state.indexOf(label)
        labelIndex === -1 && checked === true && state.unshift(label)
        labelIndex !== -1 && checked === false && state.splice(labelIndex, 1)
      } else {
        state.value = label
        hide()
      }
    })

    on('selectDefault', ({ label, value, checked }) => {
      if (checked) {
        if (multiple.value) {
          state.unshift(label)
        } else {
          state.value = label
        }
      }
    })

    const clear = useClear(state, multiple.value)

    const handelClear = () => {
      if (multiple.value) {
        const modelValue = props.modelValue
        modelValue.pop()
        state.shift() // state 用的unshift插入 所以需要从第一个开始删
        emit('update:modelValue', modelValue)
      } else {
        state.value = ''
        emit('update:modelValue', '')
      }
    }

    if (props.search) {
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
      trigger,
      searchValue,

      toggle,
      isShow,
      handelClear,
      ...clear,
    }
  },
}

function useClear(state, multiple) {
  const isClear = ref(false)

  const mouseover = () => {
    if (!multiple && state.value.length) {
      isClear.value = true
    }
  }
  const mouseout = () => {
    if (!multiple) {
      isClear.value = false
    }
  }

  return {
    isClear,
    mouseover,
    mouseout,
  }
}
</script>
