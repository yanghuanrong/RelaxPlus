<template>
  <button class="x-btn" :class="className" :disabled="isDisabled">
    <span v-if="loading" class='x-load'></span>
    <span class="content" :style="style">
      <i v-if="icon !== ''" :class="icon" />
      <span v-if="$slots.default">
        <slot></slot>
      </span>
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
    const isDisabled = computed(() => (props.loading || props.disabled))
    const {loading, icon} = toRefs(props)
    const className = useClass({
      props,
      loading,
      icon,
    })
    
    const style = computed(() => {
      let ret = {}
      if(props.loading){
        ret = {
          opacity: '0',
          transform: 'scale(2.2)'
        }
      }
      return ret
    })
    

    return {
      className,
      icon,
      style,
      isDisabled
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
