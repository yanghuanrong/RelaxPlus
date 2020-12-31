<template>
  <teleport to="body">
    <transition name="scale">
      <div class="x-modal" v-show="modelValue">
        <div class="x-modal-content" :style="style">
          <div class="x-modal-close" v-if="closable" @click="cancel">
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
      <div class="x-mask" @click="maskcancel" v-if="modelValue"></div>
    </transition>
  </teleport>
</template>

<script>
import { toRefs, ref, watch, nextTick, onMounted } from "vue";
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
    style: [String, Array, Object],
    closable: {
      type: Boolean,
      default: true,
    },
    maskClosable: {
      type: Boolean,
      default: true,
    }
  },
  emits: ["cancel", "ok", "update:modelValue", "loading"],
  setup(props, { emit }) {
    const { loading, modelValue, closable, maskClosable } = toRefs(props);

    const cancel = () => {
      emit("update:modelValue", false);
      emit("cancel");
    };

    const maskcancel = () => {
      if(maskClosable.value) {
        cancel()
      }
    }

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

    watch(modelValue, (value) => {
      if(value) {
        
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    })

    onMounted(() => {
      if(closable.value) {
        document.addEventListener('keydown', ({key}) => {
          if(key === 'Escape' && modelValue.value){
            cancel()
          }
        })
      }
    })
    

    return {
      maskcancel,
      cancel,
      ok,
    };
  },
};
</script>