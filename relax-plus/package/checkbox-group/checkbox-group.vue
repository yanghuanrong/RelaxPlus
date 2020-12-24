<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { reactive,toRefs } from 'vue'
import useEmit from '../../utils/emiter'

export default {
  name: 'CheckboxGroup',
  props: {
    modelValue: Array
  },
  setup(props, {emit}){
    const {on, broadcast} = useEmit()
    const {modelValue} = toRefs(props)
    
    on('modelValue', (isCheked, label) => {
      if(isCheked){
        modelValue.value.push(label)
      } else {
        modelValue.value.splice(modelValue.value.indexOf(label), 1)
      }
      emit('update:modelValue', modelValue)
    })
    
  }
}
</script>