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
import { inject, toRefs, computed, watchEffect, reactive, ref } from 'vue';
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

    const state = reactive({
      modelValue: null
    })
  
    watchEffect(() => {
      state.modelValue = Select.props.modelValue
    })

    const model = computed({
      get(){
        return state.modelValue
      },
      set({checked, value}){
        if(Object.prototype.toString.call(model.value) === '[object Array]'){
          const modelValue = model.value
          const labelIndex = modelValue.indexOf(value)

          labelIndex === -1 && checked === true && modelValue.push(value)
          labelIndex !== -1 && checked === false && modelValue.splice(labelIndex, 1)

          state.modelValue = modelValue
          dispatch('selectOption', {
            value: modelValue,
            label,
            checked
          })
        } else {
          state.modelValue = value
          dispatch('selectOption', {
            value,
            label,
            checked
          })
        }
      }
    })

    const isChecked = computed(() => {
      if(Object.prototype.toString.call(model.value) === '[object Array]'){
        return model.value.includes(value)
      } else {
        return model.value === value
      }
    })

    const handerClick = () => {
      if(disabled) return
      model.value = {
        checked: !isChecked.value,
        value
      }
    }
  
    dispatch('selectDefault', {
        value,
        label,
        checked: isChecked.value
      })

    return {
      handerClick,
      isChecked
    }
  }
}
</script>