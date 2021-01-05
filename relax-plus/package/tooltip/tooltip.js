import { getCurrentInstance, onMounted, onUnmounted, toRefs } from "vue";

export default {
  name: "Tooltip",
  props: {
    placement: {
      type: String,
      default: 'top',
      validator: value =>
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
          'bottom-end'
        ].includes(value)
    },
    width: String,
    content: String
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const { placement, content, width } = toRefs(props)

    const getFirstElement = () => {
      const slotsDefault = slots.default();
      if (!Array.isArray(slotsDefault)) return null;
      let element = null;
      for (let index = 0; index < slotsDefault.length; index++) {
        if (slotsDefault[index] && slotsDefault[index].type) {
          element = slotsDefault[index];
        }
      }
      return element;
    };

    const tip = document.createElement('div')
    tip.className = `x-tooltip x-tooltip-${placement.value}`
    tip.innerHTML = `<span>${content.value}</span>` || ''
    width && (tip.style.width = width.value)
    const tid = tip.id = `x-tooltip-${instance.uid}`

    const calcStyle = (Rect) => {
      let y = document.documentElement.scrollTop
      let x = 0
      switch (placement.value) {
        case 'top-start':
          x += Rect.x
          y += Rect.y - tip.offsetHeight
          break;
        case 'top':
          x += Rect.x + (Rect.width - tip.offsetWidth) * 0.5
          y += Rect.y - tip.offsetHeight
          break;
        case 'top-end':
          x += Rect.x + Rect.width - tip.offsetWidth
          y += Rect.y - tip.offsetHeight
          break;
        case 'left-start':
          x += Rect.x - tip.offsetWidth
          y += Rect.y
          break;
        case 'left':
          x += Rect.x - tip.offsetWidth
          y += Rect.y + (Rect.height - tip.offsetHeight) * 0.5
          break;
        case 'left-end':
          x += Rect.x - tip.offsetWidth
          y += Rect.y + Rect.height - tip.offsetHeight
          break;
        case 'right-start':
          x += Rect.x + Rect.width
          y += Rect.y
          break;
        case 'right':
          x += Rect.x + Rect.width
          y += Rect.y + (Rect.height - tip.offsetHeight) * 0.5
          break;
        case 'right-end':
          x += Rect.x + Rect.width
          y += Rect.y + Rect.height - tip.offsetHeight
          break;
        case 'bottom-start':
          x += Rect.x
          y += Rect.y + Rect.height
          break;
        case 'bottom':
          x += Rect.x + (Rect.width - tip.offsetWidth) * 0.5
          y += Rect.y + Rect.height
          break;
        case 'bottom-end':
          x += Rect.x + Rect.width - tip.offsetWidth
          y += Rect.y + Rect.height
          break;
        default:
          break;
      }
      tip.style.left = x + 'px'
      tip.style.top = y + 'px'
    }

    const show = (e) => {
      const Rect = e.target.getBoundingClientRect()
      const el = document.getElementById(tid)
      if (!el) {
        document.body.appendChild(tip)
      }
      calcStyle(Rect)
      tip.classList.add('x-tooltip-show')
    }

    const hide = () => {
      const el = document.getElementById(tid)
      el.classList.remove('x-tooltip-show')
    }

    onMounted(() => {
      const el = instance.proxy.$el
      el.addEventListener('mouseenter', show)
      el.addEventListener('mouseleave', hide)
    });

    onUnmounted(() => {
      const el = document.getElementById(tid)
      el && document.body.removeChild(tip)
    })

    return () => {
      return getFirstElement();
    };
  },
};