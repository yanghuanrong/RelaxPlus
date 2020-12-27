<template>
  <div 
    class="x-option"
    :class="{
      'is-checked': isChecked,
      'is-disabled': disabled
    }"
    @click.stop="handerClick"
  >
    {{label || value}}
  </div>
</template>

<script>
import { inject, toRefs, computed } from 'vue';
import emitter from '../../utils/emiter'
export default {
  name: 'Option',
  props: {
    value: String,
    label: String,
    disabled: Boolean,
  },
  setup(props){
    const {value, label, disabled} = props
    const {dispatch} = emitter()
    const Select = inject('Select', {props: {}})

    const isChecked = computed(() => Select.props.modelValue === value)

    dispatch('selectDefault', {
      value,
      label
    })

    const handerClick = () => {
      if(disabled) return
      dispatch('selectOption', {
        value,
        label
      })
    }

    return {
      handerClick,
      isChecked
    }
  }
}
</script>