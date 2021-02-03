<template>
  <div>
    <div :class="'x-badge-'+status">{{text}}</div>
  </div>
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
        ].includes(value)
    },
  }
}
</script>
