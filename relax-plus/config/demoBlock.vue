<template>
  <div class="tag-box">
    <div class="tag-left">
      <div class="tag-temp">
        <slot name="source"></slot>
      </div>
      <div class="tag-detail">
        <div class="tag-title"><span>{{decst}}</span></div>
        <div class="tag-desc">
          {{desce}}
        </div>
      </div>
    </div>

    <div class="tag-right">
      <div class="tag-display">
        <i class="x-icon-chevron-down" ></i>
        <!-- <i class="x-icon-chevron-up"></i> -->
      </div>
      <div class="tag-handle">
        <i class="x-icon-copy"></i>
        <!-- <i class="x-icon-check"></i> -->
      </div>
      <slot name="highlight"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      decst: '描述',
      desce: ''
    }
  },
  mounted(){
    const text = this.$slots.default()[0].children
    console.log(text)
    console.log(this)
  },
  methods: {
    a(){
      console.log(1)
    }
  }
}
</script>