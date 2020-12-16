<template>
  <button class="x-btn" :class="className">
    <i v-if="loading" class='x-icon-loader' />
    <i v-else-if="icon !== ''" :class="icon" />
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import {toRefs, computed} from 'vue'
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: value =>
        [
          'success',
          'primary',
          'warning',
          'info',
          'danger',
          'default',
          'text'
        ].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: value => ['lg', 'sm', 'md'].includes(value)
    },
    icon: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    block: Boolean,
    disabled: Boolean,
    loading: Boolean
  },
  setup(props){
    const {loading, icon} = toRefs(props)
    const className = useClass({
      props,
      loading,
      icon,
    })

    return {
      className,
      icon
    }    
  }
};

const useClass = ({props, loading, icon}) => {
  return computed(() => {
    return [
      props.type && `x-btn-${props.type}`,
      props.size !== '' || props.size ? `x-btn-${props.size}` : '',
      {
        'is-plain': props.plain,
        'is-round': props.round,
        'is-circle': props.circle,
        'is-block': props.block,
        'disabled': props.disabled
      },
      loading.value && 'x-btn-loading'
    ]
  })
}
</script>
