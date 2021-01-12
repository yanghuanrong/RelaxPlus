<template>
  <label 
    class="x-checkbox"
    :class="{
      'x-checkbox-checked': isCheked,
      'x-checkbox-disabled': disabled
    }"
  >
    <input type="checkbox" :label="label" :disabled="disabled" :checked="isCheked" @change.stop="handerClick" />
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
import {inject, reactive, watchEffect, computed} from 'vue'
import {isArray} from '../../utils/isType'
export default {
  name: 'Checkbox',
  props: {
    label:[String, Number, Boolean],
    modelValue: Boolean,
    checked: Boolean,
    disabled: Boolean
  },
  setup(props, {emit}){

    const checkboxGroup = inject('checkboxGroup', { props: {} })

    const state = reactive({
      modelValue: null
    })

    watchEffect(() => {
      state.modelValue = checkboxGroup.props.modelValue || props.modelValue || props.checked
    })

    const model = computed({
      get(){
        return state.modelValue
      },
      set({checked, label}){
        if (isArray(model.value)) {
          const modelValue = model.value
          const labelIndex = modelValue.indexOf(label)

          labelIndex === -1 && checked === true && modelValue.push(label)
          labelIndex !== -1 && checked === false && modelValue.splice(labelIndex, 1)

          state.modelValue = modelValue
          emit('update:modelValue', modelValue)

        } else {
          state.modelValue = checked
          emit('update:modelValue', checked)
        }
      }
    })

    const isCheked = computed(() => {
      if (isArray(model.value)) {
        return model.value.indexOf(props.label) !== -1
      } else {
        return model.value
      }
    })

    const handerClick = (e) => {
      model.value = {
        checked: e.target.checked,
        label: props.label
      }
      emit('change', model.value)
    }

    return {
      handerClick,
      isCheked
    }
  }
}
</script>