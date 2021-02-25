<template>
  <li class="x-submenu" :class="{'is-active': isActive}" @click="handleClick">
    <div class="x-menu-title">
      <slot name="title"></slot>
      <i class="x-arrow" :class="{'is-active': isActive}"></i>
    </div>
    <transition name="scaleY" ref="trigger" v-if="horizontal">
      <ul class="x-menu" v-show="isActive">
        <slot></slot>
      </ul>
    </transition>
    <CollapseTransition v-else>
      <ul class="x-menu" v-show="isActive">
        <slot></slot>
      </ul>
    </CollapseTransition>
  </li>
</template>

<script>
import { inject, ref, toRefs, watch, getCurrentInstance, onMounted } from 'vue'
import CollapseTransition from '../transitions/collapse-transition.vue'
import emiter from '../../utils/emiter'

export default {
  name: 'SubMenu',
  components: {
    CollapseTransition
  },
  props: {
    name: [String, Number],
  },
  setup(props){
    const { name } = toRefs(props)
    const { dispatch, on } = emiter()
    const menu = inject('menu', {props: {}})
    const isActive = ref(false)
    const isChild = ref('')
    const Instance = getCurrentInstance()
    const horizontal = menu.props.mode === 'horizontal'
    
    watch(menu.currName, (value) => {
      if(menu.props.uniqueOpened) {
        if(value !== name.value) {
          isActive.value = false
        }
        if(isChild.value === value) {
          isActive.value = true
        }
      }
      if(horizontal){
        if(value !== name.value) {
          isActive.value = false
        }
      }
    })
    on('item-click', (item) => {
      isChild.value = item
    })

    const handleClick = () => {
      dispatch('item-click', name.value)
      isActive.value = !isActive.value
    }

    onMounted(() => {
      if(horizontal) {
        document.addEventListener("click", (e) => {
          const el = Instance.vnode.el
          if (!el.contains(e.target)) {
            isActive.value = false
          }
        })
      }
    })

    return {
      horizontal,
      handleClick,
      isActive
    }
  }
}
</script>
