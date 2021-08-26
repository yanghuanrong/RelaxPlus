(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba0fc"],{3636:function(e,t,n){"use strict";n.r(t);var l=n("7a23"),c={class:"relax-doc"},o=Object(l["i"])("h1",null,"Input 输入框",-1),r=Object(l["i"])("blockquote",null,[Object(l["i"])("p",null,"通过鼠标或键盘输入内容，是最基础的表单域的包装")],-1),u=Object(l["i"])("h2",{id:"yan-shi"},[Object(l["i"])("a",{class:"header-anchor",href:"#yan-shi"}),Object(l["k"])(" 演示")],-1),a=Object(l["i"])("blockquote",null,[Object(l["i"])("p",null,[Object(l["k"])("使用 "),Object(l["i"])("code",null,"v-model"),Object(l["k"])(" 实现数据的双向绑定")])],-1),i=Object(l["i"])("pre",null,[Object(l["i"])("code",{class:"html"},'<template>\n  <x-input placeholder="请输入" type="text" v-model="value" />\n  <x-input placeholder="请输入" type="password" v-model="value" style="margin-left:5px" />\n  <div style="margin-top: 10px">\n    输入框值：{{value}}\n  </div>\n</template>\n\n<script>\nimport {ref} from \'vue\'\nexport default {\n  setup(){\n    const value = ref(\'\')\n\n    return {\n      value\n    }\n  }\n}\n<\/script>\n')],-1),b=Object(l["i"])("h2",{id:"jin-yong"},[Object(l["i"])("a",{class:"header-anchor",href:"#jin-yong"}),Object(l["k"])(" 禁用")],-1),d=Object(l["i"])("blockquote",null,[Object(l["i"])("p",null,[Object(l["k"])("通过 "),Object(l["i"])("code",null,"disabled"),Object(l["k"])(" 属性指定是否禁用 input 组件")])],-1),h=Object(l["i"])("pre",null,[Object(l["i"])("code",{class:"html"},'<template>\n  <x-input placeholder="请输入" type="text" disabled />\n</template>\n')],-1),p=Object(l["i"])("h2",{id:"qian-zhui-he-hou-zhui-tu-biao"},[Object(l["i"])("a",{class:"header-anchor",href:"#qian-zhui-he-hou-zhui-tu-biao"}),Object(l["k"])(" 前缀和后缀图标")],-1),j=Object(l["i"])("blockquote",null,[Object(l["i"])("p",null,[Object(l["k"])("通过设置 "),Object(l["i"])("code",null,"icon-before"),Object(l["k"])(" 和 "),Object(l["i"])("code",null,"icon-after"),Object(l["k"])(" 设置前缀及后缀图标")])],-1),O=Object(l["i"])("pre",null,[Object(l["i"])("code",{class:"html"},'<template>\n  <x-input placeholder="请输入" icon-before="x-icon-search" />\n  <x-input placeholder="请输入" icon-after="x-icon-calendar" style="margin-left:5px" />\n</template>\n')],-1),s=Object(l["i"])("h2",{id:"ke-qing-kong"},[Object(l["i"])("a",{class:"header-anchor",href:"#ke-qing-kong"}),Object(l["k"])(" 可清空")],-1),m=Object(l["i"])("blockquote",null,[Object(l["i"])("p",null,[Object(l["k"])("通过设置 "),Object(l["i"])("code",null,"clearable"),Object(l["k"])(" 可以开启输入框的清空")])],-1),f=Object(l["i"])("pre",null,[Object(l["i"])("code",{class:"html"},'<template>\n  <x-input placeholder="请输入" clearable />\n</template>\n')],-1),k=Object(l["i"])("h2",{id:"wen-ben-yu"},[Object(l["i"])("a",{class:"header-anchor",href:"#wen-ben-yu"}),Object(l["k"])(" 文本域")],-1),v=Object(l["i"])("blockquote",null,[Object(l["i"])("p",null,[Object(l["k"])("设置 "),Object(l["i"])("code",null,"type"),Object(l["k"])(" 属性为 "),Object(l["i"])("code",null,"textarea")])],-1),x=Object(l["i"])("p",null,[Object(l["i"])("code",null,"maxlength"),Object(l["k"])(" 可以限制 "),Object(l["i"])("code",null,"textarea"),Object(l["k"])(" 的输入长度")],-1),y=Object(l["i"])("pre",null,[Object(l["i"])("code",{class:"html"},'<template>\n  <x-input placeholder="请输入" style="width: 350px" type="textarea" rows="7" cols="20" :maxlength="40" />\n</template>\n\n')],-1);function g(e,t,n,g,q,w){var G=Object(l["G"])("element-demo0"),Q=Object(l["G"])("demo-block"),z=Object(l["G"])("element-demo1"),A=Object(l["G"])("element-demo2"),V=Object(l["G"])("element-demo3"),B=Object(l["G"])("element-demo4");return Object(l["z"])(),Object(l["h"])("section",c,[o,r,u,a,Object(l["l"])(Q,null,{source:Object(l["Q"])((function(){return[Object(l["l"])(G)]})),highlight:Object(l["Q"])((function(){return[i]})),_:1}),b,d,Object(l["l"])(Q,null,{source:Object(l["Q"])((function(){return[Object(l["l"])(z)]})),highlight:Object(l["Q"])((function(){return[h]})),_:1}),p,j,Object(l["l"])(Q,null,{source:Object(l["Q"])((function(){return[Object(l["l"])(A)]})),highlight:Object(l["Q"])((function(){return[O]})),_:1}),s,m,Object(l["l"])(Q,null,{source:Object(l["Q"])((function(){return[Object(l["l"])(V)]})),highlight:Object(l["Q"])((function(){return[f]})),_:1}),k,v,Object(l["l"])(Q,null,{source:Object(l["Q"])((function(){return[Object(l["l"])(B)]})),highlight:Object(l["Q"])((function(){return[y]})),default:Object(l["Q"])((function(){return[x]})),_:1})])}var q=n("5530"),w=n("1487"),G=n.n(w),Q={name:"component-doc",components:{"element-demo0":function(){var e=l["G"],t=l["l"],n=l["J"],c=l["i"],o=l["a"],r=l["z"],u=l["h"];function a(l,a){var i=e("x-input");return r(),u(o,null,[t(i,{placeholder:"请输入",type:"text",modelValue:l.value,"onUpdate:modelValue":function(e){return l.value=e}},null,8,["modelValue","onUpdate:modelValue"]),t(i,{placeholder:"请输入",type:"password",modelValue:l.value,"onUpdate:modelValue":function(e){return l.value=e},style:{"margin-left":"5px"}},null,8,["modelValue","onUpdate:modelValue"]),c("div",{style:{"margin-top":"10px"}}," 输入框值："+n(l.value),1)],64)}var i=l["C"],b={setup:function(){var e=i("");return{value:e}}};return Object(q["a"])({mounted:function(){this.$nextTick((function(){var e=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(e,G.a.highlightBlock)}))},render:a},b)}(),"element-demo1":function(){var e=l["G"],t=l["z"],n=l["f"];function c(l,c){var o=e("x-input");return t(),n(o,{placeholder:"请输入",type:"text",disabled:""})}var o={};return Object(q["a"])({mounted:function(){this.$nextTick((function(){var e=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(e,G.a.highlightBlock)}))},render:c},o)}(),"element-demo2":function(){var e=l["G"],t=l["l"],n=l["a"],c=l["z"],o=l["h"];function r(l,r){var u=e("x-input");return c(),o(n,null,[t(u,{placeholder:"请输入","icon-before":"x-icon-search"}),t(u,{placeholder:"请输入","icon-after":"x-icon-calendar",style:{"margin-left":"5px"}})],64)}var u={};return Object(q["a"])({mounted:function(){this.$nextTick((function(){var e=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(e,G.a.highlightBlock)}))},render:r},u)}(),"element-demo3":function(){var e=l["G"],t=l["z"],n=l["f"];function c(l,c){var o=e("x-input");return t(),n(o,{placeholder:"请输入",clearable:""})}var o={};return Object(q["a"])({mounted:function(){this.$nextTick((function(){var e=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(e,G.a.highlightBlock)}))},render:c},o)}(),"element-demo4":function(){var e=l["G"],t=l["z"],n=l["f"];function c(l,c){var o=e("x-input");return t(),n(o,{placeholder:"请输入",style:{width:"350px"},type:"textarea",rows:"7",cols:"20",maxlength:40})}var o={};return Object(q["a"])({mounted:function(){this.$nextTick((function(){var e=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(e,G.a.highlightBlock)}))},render:c},o)}()}};Q.render=g;t["default"]=Q}}]);
//# sourceMappingURL=chunk-2d0ba0fc.de720df4.js.map