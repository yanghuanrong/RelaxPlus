<template>
  <label 
    class="x-checkbox"
    :class="{
      'x-checkbox-checked': modelValue || checked ,
      'x-checkbox-disabled': disabled
    }"
  >
    <input type="checkbox" :label="label" :disabled="disabled" :checked="modelValue" @change="handerClick" />
    <span>
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>
        {{label}}
      </template>
    </span>
  </label>
</template>

<script>
import {computed, toRefs} from 'vue'
export default {
  name: 'Checkbox',
  props: {
    label:[String, Number, Boolean],
    modelValue: Boolean,
    checked: Boolean,
    disabled: Boolean
  },
  setup(props, {emit}){
    const field = toRefs(props) 

    const handerClick = () => {
      if(!field.disabled.value) {
        emit('update:modelValue', !field.modelValue.value)
      }
    }
    
    return {
      handerClick,
      ...field
    }
  }
}
</script>