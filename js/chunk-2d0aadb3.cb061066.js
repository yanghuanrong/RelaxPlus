(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aadb3"],{1394:function(e,n,t){"use strict";t.r(n);var c=t("7a23"),o={class:"relax-doc"},r=Object(c["j"])("h1",null,"Drawer 抽屉",-1),l=Object(c["j"])("blockquote",null,[Object(c["j"])("p",null,"屏幕边缘滑出的浮层面板")],-1),a=Object(c["j"])("h2",{id:"yan-shi"},[Object(c["j"])("a",{class:"header-anchor",href:"#yan-shi"}),Object(c["i"])(" 演示")],-1),i=Object(c["j"])("pre",null,[Object(c["j"])("code",{class:"html"},'<template>\n  <x-button type="primary" @click="visible = true">打开</x-button>\n  <x-Drawer title="标题" v-model="visible" @close="cancel" @ok="ok">\n    default\n  </x-Drawer>\n</template>\n\n<script>\n  import { ref, getCurrentInstance } from \'vue\';\n  export default {\n    setup() {\n      const instance = getCurrentInstance();\n      const { $message } = instance.appContext.config.globalProperties;\n      const visible = ref(false);\n\n      const ok = () => {\n        $message.success(\'点击了确定\');\n      };\n\n      const cancel = () => {\n        $message(\'点击了取消\');\n      };\n\n      return {\n        visible,\n        ok,\n        cancel,\n      };\n    },\n  };\n<\/script>\n')],-1);function u(e,n,t,u,s,b){var p=Object(c["C"])("element-demo0"),f=Object(c["C"])("demo-block");return Object(c["v"])(),Object(c["f"])("section",o,[r,l,a,Object(c["j"])(f,null,{source:Object(c["M"])((function(){return[Object(c["j"])(p)]})),highlight:Object(c["M"])((function(){return[i]})),_:1})])}var s=t("5530"),b=t("1487"),p=t.n(b),f={name:"component-doc",components:{"element-demo0":function(){var e=c["i"],n=c["C"],t=c["M"],o=c["j"],r=c["a"],l=c["v"],a=c["f"];function i(c,i){var u=n("x-button"),s=n("x-Drawer");return l(),a(r,null,[o(u,{type:"primary",onClick:function(e){return c.visible=!0}},{default:t((function(){return[e("打开")]})),_:1},8,["onClick"]),o(s,{title:"标题",modelValue:c.visible,"onUpdate:modelValue":function(e){return c.visible=e},onClose:c.cancel,onOk:c.ok},{default:t((function(){return[e(" default ")]})),_:1},8,["modelValue","onUpdate:modelValue","onClose","onOk"])],64)}var u=c["y"],b=c["l"],f={setup:function(){var e=b(),n=e.appContext.config.globalProperties.$message,t=u(!1),c=function(){n.success("点击了确定")},o=function(){n("点击了取消")};return{visible:t,ok:c,cancel:o}}};return Object(s["a"])({mounted:function(){this.$nextTick((function(){var e=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(e,p.a.highlightBlock)}))},render:i},f)}()}};f.render=u;n["default"]=f}}]);
//# sourceMappingURL=chunk-2d0aadb3.cb061066.js.map