<template>
  <label 
    class="x-checkbox"
    :class="{
      'x-checkbox-checked': isChecked,
      'x-checkbox-disabled': disabled
    }"
  >
    <input type="checkbox" :label="label" :disabled="disabled" :checked="isChecked" @change="handerClick" />
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
import {ref} from 'vue'
import useEmit from '../../utils/emiter'
    
export default {
  name: 'Checkbox',
  props: {
    label:[String, Number, Boolean],
    modelValue: Boolean,
    checked: Boolean,
    disabled: Boolean
  },
  setup(props, {emit}){
    const isChecked = ref(props.checked || props.modelValue)

    const handerClick = () => {
      isChecked.value = !isChecked.value
      emit('update:modelValue', isChecked)
      emit('change', isChecked)
    }
    
    return {
      handerClick,
      isChecked
    }
  }
}
</script>