<template>
  <div class="x-drawer">
    <transition name="fade">
      <div v-show="isShow" class="x-mask" @click="handleClose"></div>
    </transition>

    <transition name="drawer-left">
      <div
        class="x-drawer__view"
        v-if="isShow"
        :style="{ width: `${width}px` }"
      >
        <div class="x-drawer__header">
          <span class="x-drawer__title" v-if="title">{{ title }}</span>
        </div>
        <div class="x-drawer__body">
          <slot></slot>
        </div>
        <div class="x-drawer__footer" v-if="!$slots.footer">
          <Button type="primary" plain @click="handleClose">关闭</Button>
          <Button type="primary" @click="handleConfirm">确定</Button>
        </div>
        <slot name="footer" v-else></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { toRefs, watch, ref } from 'vue';
import Button from '../button';
export default {
  name: 'Drawer',
  components: {
    Button,
  },
  props: {
    width: {
      type: Number,
      default: 400,
    },
    modelValue: Boolean,
    title: String,
  },
  emits: ['close', 'ok', 'update:modelValue', 'loading'],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);
    const isShow = ref(modelValue.value);
    const handleClose = () => {
      emit('update:modelValue', false);
      emit('close');
    };
    const handleConfirm = () => {
      emit('ok');
    };
    watch(modelValue, (value) => {
      isShow.value = value;
    });
    return {
      isShow,
      handleClose,
      handleConfirm,
    };
  },
};
</script>
