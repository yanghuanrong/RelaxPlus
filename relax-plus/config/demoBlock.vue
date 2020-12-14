<template>
  <div class="demo-block">
    <div class="description" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="source">
      <div class="browser">
        <div class="browser-bar">
          <div class="dot">
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div class="address">
            <span>https://github.com/yanghuanrong</span>
          </div>
        </div>
        <div class="browser-body">
          <slot name="source"></slot>
        </div>
      </div>
    </div>
    <div class="meta" ref="meta">
      <div class="highlight">
        <div class="hljs-topbar"><div class="dot"><i class="red"></i><i class="yellow"></i><i class="green"></i></div></div>
        <slot name="highlight"></slot>
        <div class="hljs-footbar" v-if="fileList.length">
            <code class="hljs">
            <div class="hljs-problems__tips">Problems <span>{{fileList.length}}</span></div>
            <div v-for="(item, i) in fileList" class="hljs-problems__list" :key="'file' + i">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-none text-amber-400"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              <p>
                You may need to download it <span class="hljs-string download" :title="`download ${item.name}.${item.ext}`" @click="download(item)">{{item.name}}.{{item.ext}}</span>
              </p>
            </div>
            </code>
        </div>
      </div>
    </div>
    <div class="background" :style="{background: backColr}"></div>
  </div>
</template>

<script type="text/babel">
import "./demoBlock.less";
import FileSaver from "file-saver";
import {data} from '../data/data.json'

export default {
  data(){
    function randomColor(){
      const s = (Math.random() * 0xfffff * 1000000).toString(16)
      return '#' + s.slice(0, 6)
    }
    return {
      backColr: randomColor(),
      fileList: []
    }
  },
  created(){
    const id = this.$route.params.id
    if(id){
      data.forEach(item => {
        if(item.blogName === id) {
          this.fileList = item.blogList
        }
      })
    }
  },
  methods: {
    download(data){
      const blob = new Blob([data.core], {type: "text/plain;charset=utf-8"});
      FileSaver.saveAs(blob, `${data.name}.${data.ext}`)
    }
  }
};
</script>