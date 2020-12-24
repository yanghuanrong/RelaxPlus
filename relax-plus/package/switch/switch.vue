<template>
  <button class="x-switch"
  @click="handerClick"
  :class="[
    `x-switch-${type}`,
    {
      'x-switch-checked': modelValue,
      'x-switch-disabled': disabled
    }
  ]">
    <span  class="x-switch-inner">
      <slot v-if="modelValue" name="open"></slot>
      <slot v-else name="close"></slot>
    </span>
  </button>
</template>

<script>
import {toRefs} from 'vue';
export default {
  name: 'Switch',
  props:{
    type: {
      type: String,
      default: 'primary',
      validator: value =>
        [
          'success',
          'primary',
          'warning',
          'info',
          'danger',
        ].includes(value)
    },
    disabled: Boolean,
    modelValue: Boolean
  },
  setup(props, {emit}){
    const {modelValue, disabled} = toRefs(props) 

    const handerClick = () => {
      if(disabled.value){
        return
      }
      emit('update:modelValue', !modelValue.value)
      emit('change', !modelValue.value)
    }

    return {
      handerClick
    }
  }
};
</script>
