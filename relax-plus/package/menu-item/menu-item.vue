<template>
  <li class="x-menu-item" @click.stop="handleClick" :class="{'active': isActive}">
    <slot></slot>
  </li>
</template>

<script>
import { toRefs, inject, computed } from "vue";
import emiter from "../../utils/emiter";

export default {
  name: "MenuItem",
  props: {
    name: [String, Number],
  },
  setup(props) {
    const { name } = toRefs(props)
    const { dispatch } = emiter()
    const menu = inject('menu', {props: {}})

    const handleClick = () => {
      dispatch("item-click", name.value)
    }

    const isActive = computed(() => menu.currName.value === name.value)

    return {
      handleClick,
      isActive
    };
  },
};
</script>
