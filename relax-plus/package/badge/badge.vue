<template>
  <span :class="[
    'x-badge-'+status,
    text && 'x-badge-text'
  ]">{{text}}</span>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    text: [String, Number],
    status: {
      type: String,
      default: 'default',
      validator: value =>
        [
          'success',
          'primary',
          'warning',
          'info',
          'danger',
          'default',
        ].includes(value)
    },
  }
}
</script>
