<template>
  <ul class='x-menu'>
    <slot></slot>
  </ul>
</template>

<script>
import { getCurrentInstance, provide, ref } from 'vue'
import emiter from '../../utils/emiter'
export default {
  name: 'Menu',
  props: {
    uniqueOpened: Boolean
  },
  setup(props){
    const instance = getCurrentInstance()
    instance.currName = ref(null)
    provide('menu', instance)

    const { on } = emiter()

    on('item-click', (item) => {
      instance.currName.value = item
    })

  }
}
</script>
