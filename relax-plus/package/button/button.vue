<template>
  <button class="x-btn" :class="className" :disabled="isDisabled">
    <span v-if="load" class="x-load"></span>
    <span class="x-btn-content" :style="style">
      <i v-if="icon !== ''" :class="icon" />
      <span v-if="$slots.default">
        <slot></slot>
      </span>
    </span>
  </button>
</template>

<script>
import {
  toRefs,
  computed,
  getCurrentInstance,
  ref,
  watch,
  watchEffect,
  onMounted,
  nextTick,
} from 'vue';
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value) =>
        [
          'success',
          'primary',
          'warning',
          'info',
          'danger',
          'default',
          'text',
        ].includes(value),
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['lg', 'sm', 'md'].includes(value),
    },
    icon: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    block: Boolean,
    disabled: Boolean,
    loading: Boolean,
  },
  setup(props) {
    const instance = getCurrentInstance();
    const { loading, icon } = toRefs(props);
    const load = ref(loading.value);

    const isDisabled = computed(() => props.disabled || load.value);

    const oldClick = instance.attrs.onClick;

    watchEffect(() => {
      load.value = loading.value;
    });

    async function modified() {
      load.value = true;
      const cb = oldClick();
      cb && (await cb);
      load.value = false;
    }

    oldClick && (instance.attrs.onClick = modified);

    const className = useClass({
      props,
      load,
      icon,
    });

    const style = computed(() =>
      load.value
        ? {
            opacity: '0',
            transform: 'scale(2.2)',
          }
        : {}
    );

    return {
      className,
      icon,
      style,
      isDisabled,
      load,
    };
  },
};

const useClass = ({ props, load: loading }) => {
  return computed(() => {
    return [
      props.type && `x-btn-${props.type}`,
      props.size !== '' || props.size ? `x-btn-${props.size}` : '',
      {
        'is-plain': props.plain,
        'is-round': props.round,
        'is-circle': props.circle,
        'is-block': props.block,
        disabled: props.disabled,
      },
      loading.value && 'x-btn-loading',
    ];
  });
};
</script>
