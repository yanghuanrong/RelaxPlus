<template>
  <span :class="'x-badge'">
    <template v-if="status !== ''">
      <i :class="[`x-badge-${status}`, shine && 'x-badge-shine']"></i>
      {{ text }}
    </template>
    <sup class="x-badge-count" v-else>{{ count }}</sup>
  </span>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    text: [String, Number],
    status: {
      type: String,
      default: '',
      validator: (value) =>
        [
          '',
          'success',
          'primary',
          'warning',
          'info',
          'error',
          'default',
        ].includes(value),
    },
    count: [String, Number],
    shine: Boolean,
  },
}
</script>
