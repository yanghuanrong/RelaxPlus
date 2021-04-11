<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { getCurrentInstance, provide } from 'vue'
import emitter from '../../utils/emiter'
export default {
  name: 'RadioGroup',
  props: {
    modelValue: [String, Boolean, Number],
  },
  setup(props, { emit }) {
    provide('radioGroup', getCurrentInstance())
    const { on } = emitter()

    on('radio', (value) => {
      emit('update:modelValue', value)
    })
  },
}
</script>
