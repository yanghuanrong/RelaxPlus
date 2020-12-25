<template>
  <div 
    class="x-from-input"
    :class="{
      'x-input-icon-before': iconBefore && iconBefore !== '',
      'x-input-icon-after': iconAfter && iconAfter !== ''
    }"
  >
    <template v-if="type !== 'textarea'">
      <i class="x-before" :class="iconBefore"></i>
      <input
        class="x-input"
        v-bind="$attrs"
        :type="type"
        @input="handerInput"
        :value="text"
      />
      <i class="x-after" :class="iconAfter"></i>
    </template>
    <template v-else>
      <textarea 
        class="x-textarea"
        v-bind="$attrs"
        @input="handerInput"
        :value="text"
        :maxlength="maxlength"
      > </textarea>
      <span class='x-textarea-maxlength'>
        {{textLength}}/{{maxlength}}
      </span>
    </template>
  </div>
</template>

<script>
import { ref, toRefs, watchEffect } from "vue";
export default {
  name: "Input",
  inheritAttrs: false,
  props: {
    type: String,
    iconBefore: String,
    iconAfter: String,
    maxlength: Number,
    modelValue: [String, Number],
  },
  setup(props, { emit }) {
    const {modelValue} = toRefs(props)
    const text = ref('');
    const textLength = ref(modelValue && modelValue.value.length || 0)

    watchEffect(() => {
      text.value = modelValue && modelValue.value || ''
    })

    const handerInput = (e) => {
      text.value = e.target.value;
      textLength.value = text.value.length
      emit("update:modelValue", text.value);
    };

    return {
      handerInput,
      text,
      textLength
    };
  },
};
</script>