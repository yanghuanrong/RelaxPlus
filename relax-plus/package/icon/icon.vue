<template>
  <i :class="type"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    type: String
  }
}
</script>
