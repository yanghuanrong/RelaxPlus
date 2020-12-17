<template>
  <div class="home">
    <x-button @click="kmessage">default</x-button>
  </div>
</template>

<script>
import {getCurrentInstance} from 'vue'

export default {
  name: 'Home',
  setup(){
    const {ctx} = getCurrentInstance()
    const kmessage = () => {
      console.log(ctx.$message('你好呀'))
    }

    return {
      kmessage
    }
  },
  // methods: {
  //   kmessage(){
  //     console.log(this.$message('你好呀'))
  //   }
  // }
}
</script>
