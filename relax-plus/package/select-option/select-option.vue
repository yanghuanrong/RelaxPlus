<template>
  <CollapseTransition>
    <div 
      class="x-option"
      :class="{
        'is-checked': isChecked,
        'is-disabled': disabled
      }"
      @click.stop="handerClick"
      v-show="isShow"
    >
      {{label || value}}
    </div>
  </CollapseTransition>
</template>

<script>
import { inject, computed, watchEffect, reactive, ref, getCurrentInstance } from 'vue';
import CollapseTransition from '../transitions/collapse-transition'
import emitter from '../../utils/emiter'
import {isArray} from '../../utils/isType'

export default {
  name: 'Option',
  props: {
    value: String,
    label: String,
    disabled: Boolean,
  },
  components: {
    CollapseTransition
  },
  setup(props){
    const {value, label, disabled} = props
    const {dispatch, on} = emitter()
    const uid = getCurrentInstance().uid

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
        if (isArray(model.value)){
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
      if (isArray(model.value)){
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

    const isShow = ref(true)
    on('search', (searchValue) => {
      isShow.value = props.value.search(searchValue) > -1
    })

    return {
      handerClick,
      isShow,
      isChecked,
      uid
    }
  }
}
</script>