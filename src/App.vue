<template>
  <div id="nav">
    <x-button @click="test" type="success">success</x-button>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  setup(){

    const test = () => {
      console.log(111)
    }

    return {
      test
    }
  }
}
</script>
