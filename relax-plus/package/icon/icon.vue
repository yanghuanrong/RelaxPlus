<template>
  <i :class="type"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    type: String
  },
  setup(props){
    const type = props
    return {
      type
    }
  }
}
</script>
