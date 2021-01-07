<template>
  <div style="display: inline-block">
  <teleport to="body" :disabled="!teleprot">
    <transition name="scale" @after-leave="afterLeave" appear>
      <div class="x-modal" :class="{confirm: type !== ''}" v-show="isShow">
        <div class="x-modal-content" :class="{'x-modal-confirm-wrap': type !== ''}" :style="style">
          <div class="x-modal-close" v-if="closable" @click="cancel">
            <i class="x-icon-x"></i>
          </div>

          <div class="x-modal-head">
            <template v-if="!$slots.head">
              <i v-if="type !== ''" :class="iconType[type]"></i>
              {{ title }}
            </template>
            <slot v-else name="head"></slot>
          </div>

          <div class="x-modal-body">
            <template v-if="type !== '' ">
              {{content}}
            </template>
            <slot v-else></slot>
          </div>

          <div class="x-modal-footer">
            <template v-if="!$slots.footer">
              <Button class="x-modal-btn" v-if=" !(type !== '' & type !== 'confirm') " plain @click="cancel">{{cancelText}}</Button>
              <Button class="x-modal-btn" type="primary" :loading="loading" @click="ok">{{okText}}</Button>
            </template>
            <slot v-else name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade" appear>
      <div class="x-mask" @click="maskcancel" v-if="isShow"></div>
    </transition>
  </teleport>
  </div>
</template>

<script>
import { toRefs, ref, watch, nextTick, onMounted, getCurrentInstance, Teleport } from "vue";
import Button from "../button/index";
import emitter from "../../utils/emiter";

export default {
  name: "Modal",
  inheritAttrs: false,
  components: {
    Button,
  },
  props: {
    onOk: Function,
    onCancel: Function,
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    type: {
      type: String,
      default: ''
    },
    content: String,
    teleprot: {
      type: Boolean,
      default: true
    },
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
    const { loading, modelValue, closable, maskClosable, teleprot } = toRefs(props);
    const {onOk, onCancel} = props
    const isShow = ref(modelValue.value)

    const maskcancel = () => {
      if(maskClosable.value) {
        cancel()
      }
    }
 
    const cancel = () => {
      isShow.value = false
      emit("update:modelValue", isShow.value);
      emit("cancel");
      onCancel && onCancel()
    };

    const ok = () => {
      emit("ok");
      onOk && onOk()

      nextTick(() => {
        if (!loading.value) {
        isShow.value = false
        emit("update:modelValue", isShow.value);
        }
      });
    };

    watch(loading, (value) => {
      if (!value) {
        cancel();
      }
    });

    watch(modelValue, (value) => {
      isShow.value = value
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

    
    const instance = getCurrentInstance()
    const afterLeave = (el) => {
      document.body.style.overflow = ''
      if(!teleprot.value) {
        instance.vnode.el.parentElement?.removeChild(instance.vnode.el)
      }
    }

    const iconType = {
      info: "x-icon-info info",
      error: "x-icon-x-circle error",
      success: "x-icon-check-circle success",
      warning: "x-icon-alert-triangle warning",
      confirm: "x-icon-help-circle warning"
    }

    return {
      isShow,
      maskcancel,
      cancel,
      ok,
      afterLeave,
      iconType
    };
  },
};
</script>