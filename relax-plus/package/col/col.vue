<template>
  <component :is="tag" :class="classes" :style="style">
    <slot></slot>
  </component>
</template>

<script>
import { inject, computed } from 'vue'
import { isNumber, isString } from '../../utils/isType'
export default {
  name: 'Col',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: Number,
    order: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
  },
  setup(props) {
    const Row = inject('Row', { props: {} })
    let classes = ['x-col']

    let isSpan = true
    ;['xs', 'sm', 'md', 'lg'].forEach((item) => {
      if (isNumber(props[item])) {
        isSpan = false
        classes.push(`x-col-${item}-${props[item]}`)
      } else if (isString(props[item])) {
        isSpan = false
        props[item].span && classes.push(`x-col-${item}-${props[item].span}`)
        props[item].offset &&
          classes.push(`x-col-offset-${item}-${props[item].span}`)
      }
    })

    if (isSpan) {
      classes = [`x-col-sp-${props.span}`]
      props.offset && classes.push(`x-col-offset-sp-${props.offset}`)
    }

    if (Row.type === 'flex') {
      props.order && classes.push(`x-col-order-${props.order}`)
    }

    const style = computed(() => {
      const ret = {}
      if (Row.gutter) {
        ret.paddingLeft = `${Row.gutter / 2}px`
        ret.paddingRight = ret.paddingLeft
      }
      return ret
    })

    return {
      tag: props.tag,
      classes,
      style,
    }
  },
}
</script>
