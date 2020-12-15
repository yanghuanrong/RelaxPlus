// const fs = require('fs')
// const path = require('path')
// var source = fs.readFileSync(path.resolve(__dirname, '../../src/docs/Button.md'), 'utf8')
// setTimeout(mdLoader, 0, source)



const loaderUtils = require('loader-utils')
const mdContainer = require('markdown-it-container')
const matter = require('gray-matter');

const topbar = ''
const md = require('markdown-it')({
  highlight: function (str, lang) {
    return `<pre class="hljs-pre">${topbar}<code>${md.utils.escapeHtml(str)}</code></pre>`;
  }
})

let docPart = []

md.use(mdContainer, 'demo', {
  render: function (tokens, idx) {
    const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
    if (tokens[idx].nesting === 1) {
      const description = m && m.length > 1 ? m[1] : '';
      const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
      docPart.push(content)

      return `
      <div class="bbb">
      <demo-block>
      ${description ? `<div>${md.render(description)}</div>` : ''}
      <template v-slot:source>
        <x-demo${docPart.length} />
      </template>
      `;
    }
    // 

    return '</demo-block></div>';
  }
})

md.use(function () {
  const defaultRender = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];

    // 判断该 fence 是否在 :::demo 内
    const prevToken = tokens[idx - 1];
    const isInDemoContainer = prevToken && prevToken.nesting === 1 && prevToken.info.trim().match(/^demo\s*(.*)$/);
    if (token.info.trim() === 'html' && isInDemoContainer) { 
      return `<template v-slot:highlight><pre class="hljs-pre" v-pre><code class="html">${md.utils.escapeHtml(token.content)}</code></pre></template>`;
    }
    return defaultRender(tokens, idx, options, env, self);
  };
})

function mdLoader(source) {
  docPart = []
  const loadObj = this.resourceQuery ? loaderUtils.parseQuery(this.resourceQuery) : {}
  const html = md.render(matter(source).content)
  console.log(loadObj)
  if (loadObj.demo) {
    return docPart[loadObj.demo - 1]
  }
  const demoRequest = docPart.map((demo, index) => {
    return `import xDemo${index + 1} from ${loaderUtils.stringifyRequest(this, this.resourcePath + `?demo=${index + 1}`)}`
  }).join('\n')
  console.log('原路径' + this.resourcePath)
  console.log('变成了相对路径' + demoRequest)
  const template = `
  <template>
    <div class="content blog-doc">
      ${html}
    </div>
  </template>`

  const script = `
  <script>
  import DemoBlock from '@RelaxPlus/config/demoBlock.vue'
  ${demoRequest}
  export default {
    components: {
      DemoBlock,
      ${docPart.map((demo, index) => `xDemo${index + 1}`).join(',\n')}
    }
  }
  </script>
  `

  const page = `
  ${template}
  ${script}
  `

  console.log(page)

  // const a = sfc.parse(test)
  // const b = compiler.ParseOptions(a)
  // console.log(compiler)
  return page
}

module.exports = mdLoader