(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2389e5"],{ffc2:function(t,n,e){"use strict";e.r(n);var o=e("7a23"),l={class:"relax-doc"},c=Object(o["i"])("h1",null,"Tooltip 文字提示",-1),r=Object(o["i"])("blockquote",null,[Object(o["i"])("p",null,"用于辅助的文字提示，可代替 HTML 元素默认的 title 属性")],-1),u=Object(o["i"])("h2",{id:"yan-shi"},[Object(o["i"])("a",{class:"header-anchor",href:"#yan-shi"}),Object(o["k"])(" 演示")],-1),i=Object(o["i"])("blockquote",null,[Object(o["i"])("p",null,"基本使用")],-1),a=Object(o["i"])("p",null,"文字必须要被标签包裹",-1),p=Object(o["i"])("pre",null,[Object(o["i"])("code",{class:"html"},'<template>\n  <x-tooltip content="这是文字提示">\n    <span>文字提示</span>\n  </x-tooltip>\n</template>\n')],-1),f=Object(o["i"])("h2",{id:"wei-zhi"},[Object(o["i"])("a",{class:"header-anchor",href:"#wei-zhi"}),Object(o["k"])(" 位置")],-1),x=Object(o["i"])("blockquote",null,[Object(o["i"])("p",null,"left , top , right , bottom 是物理中的 4 个方向, 表示显示的位置")],-1),b=Object(o["i"])("p",null,[Object(o["k"])("通过"),Object(o["i"])("code",null,"placement"),Object(o["k"])("设置不同的位置")],-1),d=Object(o["i"])("pre",null,[Object(o["i"])("code",{class:"html"},'<template>\n  <div class="tooltip-box">\n    <x-row type="flex" justify="center">\n      <x-col :span="5">\n        <x-tooltip content="这是文字提示" placement="top-start">\n          <x-button type="primary" plain> 上左 </x-button>\n        </x-tooltip>\n      </x-col>\n      <x-col :span="5">\n        <x-tooltip content="这是文字提示" placement="top">\n          <x-button type="primary" plain> 上中 </x-button>\n        </x-tooltip>\n      </x-col>\n      <x-col :span="5">\n        <x-tooltip content="这是文字提示" placement="top-end">\n          <x-button type="primary" plain> 上右 </x-button>\n        </x-tooltip>\n      </x-col>\n    </x-row>\n\n    <x-row type="flex" justify="space-between">\n      <x-col :span="4">\n        <x-tooltip content="这是文字提示" placement="left-start">\n          <x-button type="primary" plain> 左上 </x-button>\n        </x-tooltip>\n      </x-col>\n      <x-col :span="4">\n        <x-tooltip content="这是文字提示" placement="right-start">\n          <x-button type="primary" plain> 右上 </x-button>\n        </x-tooltip>\n      </x-col>\n    </x-row>\n\n    <x-row type="flex" justify="space-between">\n      <x-col :span="4">\n        <x-tooltip content="这是文字提示" placement="left">\n          <x-button type="primary" plain> 左中 </x-button>\n        </x-tooltip>\n      </x-col>\n      <x-col :span="4">\n        <x-tooltip content="这是文字提示" placement="right">\n          <x-button type="primary" plain> 右中 </x-button>\n        </x-tooltip>\n      </x-col>\n    </x-row>\n\n    <x-row type="flex" justify="space-between">\n      <x-col :span="4">\n        <x-tooltip content="这是文字提示" placement="left-end">\n          <x-button type="primary" plain> 左下 </x-button>\n        </x-tooltip>\n      </x-col>\n      <x-col :span="4">\n        <x-tooltip content="这是文字提示" placement="right-end">\n          <x-button type="primary" plain> 右下 </x-button>\n        </x-tooltip>\n      </x-col>\n    </x-row>\n\n    <x-row type="flex" justify="center">\n      <x-col :span="5">\n        <x-tooltip content="这是文字提示" placement="bottom-start">\n          <x-button type="primary" plain> 下左 </x-button>\n        </x-tooltip>\n      </x-col>\n      <x-col :span="5">\n        <x-tooltip content="这是文字提示" placement="bottom">\n          <x-button type="primary" plain> 下中 </x-button>\n        </x-tooltip>\n      </x-col>\n      <x-col :span="5">\n        <x-tooltip content="这是文字提示" placement="bottom-end">\n          <x-button type="primary" plain> 下右 </x-button>\n        </x-tooltip>\n      </x-col>\n    </x-row>\n\n  </div>\n</template>\n')],-1),s=Object(o["i"])("h2",{id:"she-zhi-kuan-du"},[Object(o["i"])("a",{class:"header-anchor",href:"#she-zhi-kuan-du"}),Object(o["k"])(" 设置宽度")],-1),m=Object(o["i"])("blockquote",null,[Object(o["i"])("p",null,[Object(o["k"])("可以设置"),Object(o["i"])("code",null,"tooltip"),Object(o["k"])("的宽度 换行可以用 "),Object(o["i"])("code",null,"br")])],-1),y=Object(o["i"])("p",null,"文字必须要被标签包裹",-1),j=Object(o["i"])("pre",null,[Object(o["i"])("code",{class:"html"},'<template>\n  <x-tooltip content="这是一段非常长的文字提示，主要是用于演示" width="180px">\n    <span>文字提示</span>\n  </x-tooltip>\n</template>\n')],-1);function h(t,n,e,h,O,_){var w=Object(o["G"])("element-demo0"),k=Object(o["G"])("demo-block"),g=Object(o["G"])("element-demo1"),v=Object(o["G"])("element-demo2");return Object(o["z"])(),Object(o["h"])("section",l,[c,r,u,i,Object(o["l"])(k,null,{source:Object(o["Q"])((function(){return[Object(o["l"])(w)]})),highlight:Object(o["Q"])((function(){return[p]})),default:Object(o["Q"])((function(){return[a]})),_:1}),f,x,Object(o["l"])(k,null,{source:Object(o["Q"])((function(){return[Object(o["l"])(g)]})),highlight:Object(o["Q"])((function(){return[d]})),default:Object(o["Q"])((function(){return[b]})),_:1}),s,m,Object(o["l"])(k,null,{source:Object(o["Q"])((function(){return[Object(o["l"])(v)]})),highlight:Object(o["Q"])((function(){return[j]})),default:Object(o["Q"])((function(){return[y]})),_:1})])}var O=e("5530"),_=e("1487"),w=e.n(_),k={name:"component-doc",components:{"element-demo0":function(){var t=o["i"],n=o["G"],e=o["Q"],l=o["z"],c=o["f"];function r(o,r){var u=n("x-tooltip");return l(),c(u,{content:"这是文字提示"},{default:e((function(){return[t("span",null,"文字提示")]})),_:1})}var u={};return Object(O["a"])({mounted:function(){this.$nextTick((function(){var t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,w.a.highlightBlock)}))},render:r},u)}(),"element-demo1":function(){var t=o["k"],n=o["G"],e=o["Q"],l=o["l"],c=o["z"],r=o["h"];function u(o,u){var i=n("x-button"),a=n("x-tooltip"),p=n("x-col"),f=n("x-row");return c(),r("div",{class:"tooltip-box"},[l(f,{type:"flex",justify:"center"},{default:e((function(){return[l(p,{span:5},{default:e((function(){return[l(a,{content:"这是文字提示",placement:"top-start"},{default:e((function(){return[l(i,{type:"primary",plain:""},{default:e((function(){return[t(" 上左 ")]})),_:1})]})),_:1})]})),_:1}),l(p,{span:5},{default:e((function(){return[l(a,{content:"这是文字提示",placement:"top"},{default:e((function(){return[l(i,{type:"primary",plain:""},{default:e((function(){return[t(" 上中 ")]})),_:1})]})),_:1})]})),_:1}),l(p,{span:5},{default:e((function(){return[l(a,{content:"这是文字提示",placement:"top-end"},{default:e((function(){return[l(i,{type:"primary",plain:""},{default:e((function(){return[t(" 上右 ")]})),_:1})]})),_:1})]})),_:1})]})),_:1}),l(f,{type:"flex",justify:"space-between"},{default:e((function(){return[l(p,{span:4},{default:e((function(){return[l(a,{content:"这是文字提示",placement:"left-start"},{default:e((function(){return[l(i,{type:"primary",plain:""},{default:e((function(){return[t(" 左上 ")]})),_:1})]})),_:1})]})),_:1}),l(p,{span:4},{default:e((function(){return[l(a,{content:"这是文字提示",placement:"right-start"},{default:e((function(){return[l(i,{type:"primary",plain:""},{default:e((function(){return[t(" 右上 ")]})),_:1})]})),_:1})]})),_:1})]})),_:1}),l(f,{type:"flex",justify:"space-between"},{default:e((function(){return[l(p,{span:4},{default:e((function(){return[l(a,{content:"这是文字提示",placement:"left"},{default:e((function(){return[l(i,{type:"primary",plain:""},{default:e((function(){return[t(" 左中 ")]})),_:1})]})),_:1})]})),_:1}),l(p,{span:4},{default:e((function(){return[l(a,{content:"这是文字提示",placement:"right"},{default:e((function(){return[l(i,{type:"primary",plain:""},{default:e((function(){return[t(" 右中 ")]})),_:1})]})),_:1})]})),_:1})]})),_:1}),l(f,{type:"flex",justify:"space-between"},{default:e((function(){return[l(p,{span:4},{default:e((function(){return[l(a,{content:"这是文字提示",placement:"left-end"},{default:e((function(){return[l(i,{type:"primary",plain:""},{default:e((function(){return[t(" 左下 ")]})),_:1})]})),_:1})]})),_:1}),l(p,{span:4},{default:e((function(){return[l(a,{content:"这是文字提示",placement:"right-end"},{default:e((function(){return[l(i,{type:"primary",plain:""},{default:e((function(){return[t(" 右下 ")]})),_:1})]})),_:1})]})),_:1})]})),_:1}),l(f,{type:"flex",justify:"center"},{default:e((function(){return[l(p,{span:5},{default:e((function(){return[l(a,{content:"这是文字提示",placement:"bottom-start"},{default:e((function(){return[l(i,{type:"primary",plain:""},{default:e((function(){return[t(" 下左 ")]})),_:1})]})),_:1})]})),_:1}),l(p,{span:5},{default:e((function(){return[l(a,{content:"这是文字提示",placement:"bottom"},{default:e((function(){return[l(i,{type:"primary",plain:""},{default:e((function(){return[t(" 下中 ")]})),_:1})]})),_:1})]})),_:1}),l(p,{span:5},{default:e((function(){return[l(a,{content:"这是文字提示",placement:"bottom-end"},{default:e((function(){return[l(i,{type:"primary",plain:""},{default:e((function(){return[t(" 下右 ")]})),_:1})]})),_:1})]})),_:1})]})),_:1})])}var i={};return Object(O["a"])({mounted:function(){this.$nextTick((function(){var t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,w.a.highlightBlock)}))},render:u},i)}(),"element-demo2":function(){var t=o["i"],n=o["G"],e=o["Q"],l=o["z"],c=o["f"];function r(o,r){var u=n("x-tooltip");return l(),c(u,{content:"这是一段非常长的文字提示，主要是用于演示",width:"180px"},{default:e((function(){return[t("span",null,"文字提示")]})),_:1})}var u={};return Object(O["a"])({mounted:function(){this.$nextTick((function(){var t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,w.a.highlightBlock)}))},render:r},u)}()}};k.render=h;n["default"]=k}}]);
//# sourceMappingURL=chunk-2d2389e5.3b346586.js.map