<template>
  <div class="x-from-input">
    <template v-if="type !== 'textarea'">
      <input
        class="x-input"
        v-bind="$attrs"
        @input="handerInput"
        :value="value"
      />
    </template>
    <template v-else>
      <textarea 
        class="x-textarea"
        v-bind="$attrs"
        @input="handerInput"
        :value="value"
      > </textarea>
    </template>
  </div>
</template>

<script>
import { toRefs } from "vue";
export default {
  name: "Input",
  inheritAttrs: false,
  props: {
    type: String,
    modelValue: [String, Number],
  },
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);
    const value = modelValue;
    const handerInput = (e) => {
      const value = e.target.value;
      emit("update:modelValue", value);
    };

    return {
      handerInput,
      value,
    };
  },
};
</script>