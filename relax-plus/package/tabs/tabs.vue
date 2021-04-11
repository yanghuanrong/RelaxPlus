<template>
  <div class="x-tabs">
    <div class="x-tabs-nav">
      <div
        class="x-tabs-menu"
        :ref="setItemRef"
        v-for="(item, i) in nav"
        :key="i"
        @click="setTabs(item, i)"
        :class="[
          item.disabled && 'x-tabs-disabled',
          {
            active: active.index === i,
          },
        ]"
      >
        {{ item.label }}
      </div>
      <i class="x-tabs-line" :style="line"></i>
    </div>
    <div class="x-tabs-view">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { provide, reactive, onBeforeUpdate, onMounted, nextTick } from 'vue'
import emtter from '../../utils/emiter'
export default {
  name: 'Tabs',
  setup() {
    const { on } = emtter()
    const nav = reactive([])
    const active = reactive({})
    const line = reactive({})
    provide('active', active)

    on('props', (value) => {
      if (!active.label) {
        setTabs(value, 0)
      }
      nav.push(value)
    })

    const setTabs = (item, i) => {
      if (item.disabled) return
      active.label = item.label
      active.index = i

      nextTick(() => {
        const e = itemRefs[i].getBoundingClientRect()
        line.width = e.width + 'px'
        line.transform = ` translateX(${itemRefs[i].offsetLeft}px)`
      })
    }

    let itemRefs = []
    const setItemRef = (el) => {
      itemRefs.push(el)
    }
    onBeforeUpdate(() => {
      itemRefs = []
    })

    return {
      nav,
      active,
      setTabs,
      setItemRef,
      line,
    }
  },
}
</script>
