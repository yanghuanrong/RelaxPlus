const { stripScript, stripTemplate, genInlineComponentText } = require('./util')
const md = require('./config')
const matter = require('gray-matter');


const fs = require('fs')
const path = require('path')
var source = fs.readFileSync(path.resolve(__dirname, '../../docs/Switch.md'), 'utf8')
setTimeout(mdLoader, 0, source)


function mdLoader (source) {
  const content = md.render(matter(source).content)

  const startTag = '<!--element-demo:'
  const startTagLen = startTag.length
  const endTag = ':element-demo-->'
  const endTagLen = endTag.length

  let componenetsString = ''
  let id = 0 // demo 的 id
  const output = [] // 输出的内容
  let start = 0 // 字符串开始位置

  let commentStart = content.indexOf(startTag)
  let commentEnd = content.indexOf(endTag, commentStart + startTagLen)
  while (commentStart !== -1 && commentEnd !== -1) {
    output.push(content.slice(start, commentStart))

    const commentContent = content.slice(commentStart + startTagLen, commentEnd)
    const html = stripTemplate(commentContent)
    const script = stripScript(commentContent)

    const demoComponentContent = genInlineComponentText(html, script)

    const demoComponentName = `element-demo${id}`
    output.push(`<template #source><${demoComponentName} /></template>`)
    componenetsString += `${JSON.stringify(
      demoComponentName
    )}: ${demoComponentContent},`

    // 重新计算下一次的位置
    id++
    start = commentEnd + endTagLen
    commentStart = content.indexOf(startTag, start)
    commentEnd = content.indexOf(endTag, commentStart + startTagLen)
  }

  // 仅允许在 demo 不存在时，才可以在 Markdown 中写 script 标签
  // todo: 优化这段逻辑
  let pageScript = ''
  if (componenetsString) {
    pageScript = `<script>
      import hljs from 'highlight.js'
      import * as Vue from "vue"
      import {onMounted, nextTick, reactive, ref} from 'vue'

      export default {
        name: 'component-doc',
        setup(){
          const menu = reactive([])
          const menuActive = ref(0)
          onMounted(() => {
            nextTick(() => {
              let h2 = document.querySelectorAll('.relax-doc [id]')
              if(h2.length){
                Array.from(h2).forEach(item => {
                  menu.push({
                    name: item.innerText,
                    id: item.id
                  })
                })
              }
            })
          })

          const ScrollTop = (number = 0, time) => {
              if (!time) {
                  document.body.scrollTop = document.documentElement.scrollTop = number;
                  return number;
              }
              const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
              let spacingInex = time / spacingTime; // 计算循环的次数
              let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
              let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
              let scrollTimer = setInterval(() => {
                  if (spacingInex > 0) {
                      spacingInex--;
                      ScrollTop(nowTop += everTop);
                  } else {
                      clearInterval(scrollTimer); // 清除计时器
                  }
              }, spacingTime);
          };

          const toView = (i) => {
            if(menu.length){
              const el = document.querySelector('#'+menu[i].id)
              const top = el && el.offsetTop - 30
              ScrollTop(top, 400)
            }
          }

          window.onscroll = (e) => {
            if(!menu.length){
              return
            }
            let nowTop = document.body.scrollTop + document.documentElement.scrollTop
            let location = []

            for(let i=0; i<menu.length; i++){
              let el = document.querySelector('#'+menu[i].id)
              let top = el && el.offsetTop - 30
              location.push(Math.abs(nowTop - top))
            }

            let k = 0
            let iNow = location[0]
            for(let i = 1; i<location.length; i++){
              if(location[i] < iNow){
                iNow = location[i]
                k = i
              }
            }
            menuActive.value = k
          }

          return {
            menu,
            menuActive,
            toView
          }
        },
        components: {
          ${componenetsString}
        }
      }
    </script>`
  } else if (content.indexOf('<script>') === 0) {
    // 硬编码，有待改善
    start = content.indexOf('</script>') + '</script>'.length
    pageScript = content.slice(0, start)
  }

  output.push(content.slice(start))
  return `
    <template>
      <section class="relax-doc">
        ${output.join('')}
      </section>
      <div class="h2-nav" v-if="menu">
        <div class="dot" :style="{transform: 'translateY('+ (menuActive * 28) +'px)'}"></div>
        <div class="item" v-for="(item, i) in menu" :class="{active: menuActive === i}" @click="toView(i)">{{item.name}}</div>
      </div>
    </template>
    ${pageScript}
  `
}

module.exports = mdLoader
