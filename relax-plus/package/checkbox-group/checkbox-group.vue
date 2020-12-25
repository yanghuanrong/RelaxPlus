<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { getCurrentInstance, provide } from 'vue'

export default {
  name: 'CheckboxGroup',
  props: {
    modelValue: Array
  },
  setup(props, {emit}){
    provide('checkboxGroup', getCurrentInstance())
  }
}
</script>