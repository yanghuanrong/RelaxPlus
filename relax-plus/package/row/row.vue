<template>
  <component :is="tag" :class="classes" :style="style">
    <slot></slot>
  </component>
</template>

<script>
import { computed, getCurrentInstance, provide } from 'vue'
export default {
  name: 'Row',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    type: String,
    justify: {
      type: String,
      default: 'start',
      validator: (value) =>
        ['start', 'center', 'end', 'space-between', 'space-around'].includes(
          value
        ),
    },
    align: {
      type: String,
      default: 'top',
      validator: (value) => ['top', 'center', 'bottom'].includes(value),
    },
  },
  setup(props) {
    const classes = ['x-row']

    if (props.type === 'flex') {
      classes.push('x-row-flex')
      props.justify && classes.push(`x-row-flex-justify-${props.justify}`)
      props.align && classes.push(`x-row-flex-align-${props.align}`)
    }

    const style = computed(() => {
      const ret = {}
      if (props.gutter) {
        ret.marginLeft = `-${props.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }
      return ret
    })

    provide('Row', getCurrentInstance())

    return {
      tag: props.tag,
      classes,
      style,
    }
  },
}
</script>
