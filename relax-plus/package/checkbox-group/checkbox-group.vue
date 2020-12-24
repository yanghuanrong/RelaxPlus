<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { toRefs } from 'vue'
import useEmit from '../../utils/emiter'

export default {
  name: 'CheckboxGroup',
  props: {
    modelValue: Array
  },
  setup(props){
    const {on, broadcast} = useEmit()
    // const {modelValue} = toRefs(props)

    // broadcast('checkboxGroup:modelValue', modelValue)
    // on('checkbox:modelValue', (array) => {
    //   emit('update:modelValue', array)
    // })
  }
}
</script>