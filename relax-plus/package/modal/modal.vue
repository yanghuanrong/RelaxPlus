<template>
  <teleport to="body">
    <transition name="scale">
      <div class="x-modal" v-show="modelValue">
        <div class="x-modal-content" :style="style">
          <div class="x-modal-close" @click="cancel">
            <i class="x-icon-x"></i>
          </div>
          <div class="x-modal-head">
            <template v-if="!$slots.head">
              {{ title }}
            </template>
            <slot v-else name="head"></slot>
          </div>

          <div class="x-modal-body">
            <slot></slot>
          </div>

          <div class="x-modal-footer">
            <template v-if="!$slots.footer">
              <Button class="x-modal-btn" plain @click="cancel">取消</Button>
              <Button class="x-modal-btn" type="primary" :loading="loading" @click="ok">确定</Button>
            </template>
            <slot v-else name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="x-mask" v-if="modelValue"></div>
    </transition>
  </teleport>
</template>

<script>
import { toRefs, ref, watch, nextTick } from "vue";
import Button from "../button/index";
export default {
  name: "Modal",
  components: {
    Button,
  },
  props: {
    modelValue: Boolean,
    title: String,
    loading: Boolean,
    style: [String, Array, Object]
  },
  emits: ["cancel", "ok", "update:modelValue", "loading"],
  setup(props, { emit }) {
    const { loading } = toRefs(props);

    const cancel = () => {
      emit("update:modelValue", false);
      emit("cancel");
    };

    const ok = () => {
      emit("ok");
      nextTick(() => {
        if (!loading.value) {
          emit("update:modelValue", false);
        }
      });
    };

    watch(loading, (value) => {
      if (!value) {
        cancel();
      }
    });

    return {
      cancel,
      ok,
    };
  },
};
</script>