<template>
  <div class="steps-item" :class="className">
    <div class="step-icon">
      <i :class="icon" v-if="icon"></i>
      <template v-else>
        <i class="x-icon-check" v-if="success"></i>
        <i v-else>{{ num + 1 }}</i>
      </template>
    </div>
    <div class="step-line"></div>
    <div class="step-title">
      <span>
        {{ title }}
      </span>
      <p>
        {{ description }}
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import emitter from "../../utils/emiter";
import { computed, getCurrentInstance, inject, ref } from "vue";

export default {
  name: "Step",
  props: {
    title: String,
    description: String,
    icon: String,
  },
  setup() {
    const { dispatch } = emitter();

    const instance = getCurrentInstance();
    dispatch("step-item", instance.uid);

    const steps = inject("steps");
    const num = ref(steps.indexOf(instance.uid));

    const active = inject("step-active");
    const current = computed(() => active.value === num.value);
    const success = computed(() => active.value > num.value);

    const className = computed(() => ({
      current: current.value,
      success: success.value,
    }));

    return {
      num,
      success,
      className,
    };
  },
};
</script>
