import {
  getCurrentInstance,
  onMounted,
  onUnmounted,
  toRefs,
  ref,
  watchEffect,
  nextTick,
} from 'vue'
import { on, off, remove, add } from '../../utils/dom'

export default {
  name: 'Tooltip',
  props: {
    placement: {
      type: String,
      default: 'top',
      validator: (value) =>
        [
          'left-start',
          'left',
          'left-end',
          'top-start',
          'top',
          'top-end',
          'right-start',
          'right',
          'right-end',
          'bottom-start',
          'bottom',
          'bottom-end',
        ].includes(value),
    },
    modelValue: Boolean,
    width: String,
    content: [String, Number],
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance()
    const { placement, content, width, modelValue } = toRefs(props)
    const isShow = ref(false)

    function getFirstElement() {
      const slotsDefault = slots.default()
      if (!Array.isArray(slotsDefault)) return null
      let element = null
      for (let index = 0; index < slotsDefault.length; index++) {
        if (slotsDefault[index] && slotsDefault[index].type) {
          element = slotsDefault[index]
        }
      }
      return element
    }

    const tip = document.createElement('div')
    tip.className = `x-tooltip x-tooltip-${placement.value}`
    width && (tip.style.width = width.value)
    const tid = (tip.id = `x-tooltip-${instance.uid}`)

    function hide() {
      const el = document.getElementById(tid)
      if (el) {
        remove(el, 'x-tooltip-show')
        on(el, 'transitionend', none)
      }
    }

    function update() {
      const Rect = instance.proxy.$el.getBoundingClientRect()
      const el = document.getElementById(tid)
      if (!el) {
        document.body.appendChild(tip)
      }
      off(tip, 'transitionend', none)
      tip.style.display = 'block'
      const { x, y } = calcStyle(Rect, tip, placement.value)
      tip.style.top = y + 'px'
      tip.style.left = x + 'px'
    }

    function show() {
      tip && add(tip, 'x-tooltip-show')
    }

    const none = () => {
      document.getElementById(tid).style.display = 'none'
    }

    onMounted(() => {
      const el = instance.proxy.$el

      watchEffect(() => {
        tip.innerHTML = `<span>${content.value}</span>` || ''
        nextTick(update)
        if (modelValue.value || isShow.value) {
          show()
        } else {
          hide()
        }
      })

      on(el, 'mouseenter', () => {
        if (!modelValue && !modelValue.value) return
        isShow.value = true
      })
      on(el, 'mouseleave', () => {
        if (modelValue && modelValue.value) return
        isShow.value = false
      })
    })

    onUnmounted(() => {
      const el = document.getElementById(tid)
      el && document.body.removeChild(tip)
    })

    return () => {
      return getFirstElement()
    }
  },
}

function calcStyle(Rect, tip, key) {
  let y = document.documentElement.scrollTop
  let x = 0

  const placement = {
    'top-start': () => {
      x += Rect.x
      y += Rect.y - tip.offsetHeight
    },
    top: () => {
      x += Rect.x + (Rect.width - tip.offsetWidth) * 0.5
      y += Rect.y - tip.offsetHeight
    },
    'top-end': () => {
      x += Rect.x + Rect.width - tip.offsetWidth
      y += Rect.y - tip.offsetHeight
    },
    'left-start': () => {
      x += Rect.x - tip.offsetWidth
      y += Rect.y
    },
    left: () => {
      x += Rect.x - tip.offsetWidth
      y += Rect.y + (Rect.height - tip.offsetHeight) * 0.5
    },
    'left-end': () => {
      x += Rect.x - tip.offsetWidth
      y += Rect.y + Rect.height - tip.offsetHeight
    },
    'right-start': () => {
      x += Rect.x + Rect.width
      y += Rect.y
    },
    right: () => {
      x += Rect.x + Rect.width
      y += Rect.y + (Rect.height - tip.offsetHeight) * 0.5
    },
    'right-end': () => {
      x += Rect.x + Rect.width
      y += Rect.y + Rect.height - tip.offsetHeight
    },
    'bottom-start': () => {
      x += Rect.x
      y += Rect.y + Rect.height
    },
    bottom: () => {
      x += Rect.x + (Rect.width - tip.offsetWidth) * 0.5
      y += Rect.y + Rect.height
    },
    'bottom-end': () => {
      x += Rect.x + Rect.width - tip.offsetWidth
      y += Rect.y + Rect.height
    },
  }
  placement[key]()
  return { x, y }
}
