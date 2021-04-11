<template>
  <label
    class="x-radio"
    :class="{
      'x-radio-checked': isCheked,
      'x-radio-disabled': disabled,
    }"
  >
    <input
      type="radio"
      :name="value"
      :checked="isCheked"
      :value="label"
      :disabled="disabled"
      @change.stop="handerClick"
    />
    <span>
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>
        {{ label }}
      </template>
    </span>
  </label>
</template>

<script>
import { inject, computed, toRefs } from 'vue'
import emitter from '../../utils/emiter'
export default {
  name: 'Radio',
  props: {
    label: [String, Number, Boolean],
    modelValue: Boolean,
    checked: Boolean,
    disabled: Boolean,
    value: [String, Number],
    modelValue: [String, Boolean, Number],
  },
  setup(props, { emit }) {
    const { modelValue, checked } = toRefs(props)
    const radioGroup = inject('radioGroup', { props: {} })

    const { dispatch } = emitter()

    const handerClick = (e) => {
      dispatch('radio', props.value)
      emit('update:modelValue', props.value)
    }

    const isCheked = computed(() => {
      return (
        radioGroup.props.modelValue === props.value ||
        modelValue?.value === props.value ||
        checked.value
      )
    })

    return {
      handerClick,
      isCheked,
    }
  },
}
</script>
