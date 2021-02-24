<template>
  <li class="x-submenu" @click="handleClick">
    <div class="x-menu-title">
      <slot name="title"></slot>
      <i class="x-arrow" :class="{'is-active': isActive}"></i>
    </div>
    <CollapseTransition>
      <ul class="x-menu" v-show="isActive">
        <slot></slot>
      </ul>
    </CollapseTransition>
  </li>
</template>

<script>
import { inject, ref, toRefs, watch, watchEffect } from 'vue'
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
    
    
    watch(menu.currName, (value) => {
      if(menu.props.uniqueOpened) {
        if(value !== name.value) {
          isActive.value = false
        }
        if(isChild.value === value) {
          isActive.value = true
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

    return {
      handleClick,
      isActive
    }
  }
}
</script>
