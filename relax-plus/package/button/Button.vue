<template>
  <button class="x-btn" :class="className">
    <slot></slot>
  </button>
</template>

<script>
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
    const className = useClass(props)

    return {
      className
    }    
  }
};

const useClass = props => ([
  props.type && 'x-btn-' + props.type,
  props.size !== '' || props.size ? 'x-btn-' + props.size : '',
  {
    'is-plain': props.plain,
    'is-round': props.round,
    'is-circle': props.circle,
    'is-block': props.block,
    'disabled': props.disabled
  },
  props.loading && 'x-btn-loading'
])

</script>
