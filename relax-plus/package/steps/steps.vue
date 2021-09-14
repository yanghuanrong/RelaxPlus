<template>
  <div class="x-steps">
    <slot></slot>
  </div>
</template>

<script>
import emitter from "../../utils/emiter";
import { reactive, watchEffect, provide, toRefs, ref } from "vue";
export default {
  name: "Steps",
  props: {
    current: Number,
  },
  setup(props) {
    const { on } = emitter();
    const items = reactive([]);

    const { current } = toRefs(props);
    const active = ref(0);

    watchEffect(() => {
      current && (active.value = current.value);
    });

    on("step-item", (uid) => {
      items.push(uid);
    });

    provide("steps", items);
    provide("step-active", active);
  },
};
</script>
