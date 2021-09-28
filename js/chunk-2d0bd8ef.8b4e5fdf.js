(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd8ef"],{"2d07":function(e,n,c){"use strict";c.r(n);var t=c("7a23"),l={class:"relax-doc"},o=Object(t["i"])("h1",null,"Checkbox 多选框",-1),r=Object(t["i"])("blockquote",null,[Object(t["i"])("p",null,"有可选项且需要选择多项")],-1),a=Object(t["i"])("h2",{id:"yan-shi"},[Object(t["i"])("a",{class:"header-anchor",href:"#yan-shi"}),Object(t["k"])(" 演示")],-1),u=Object(t["i"])("blockquote",null,[Object(t["i"])("p",null,[Object(t["k"])("使用 "),Object(t["i"])("code",null,"v-model"),Object(t["k"])(" 双向绑定")])],-1),i=Object(t["i"])("pre",null,[Object(t["i"])("code",{class:"html"},'<template>\n  <x-checkbox v-model="checked" label="Checkbox" />\n</template>\n\n<script>\n  import {ref} from \'vue\'\n  export default {\n    setup(){\n      const checked = ref(true)\n\n      return {\n        checked\n      }\n    }\n  }\n<\/script>\n')],-1),d=Object(t["i"])("h2",{id:"jin-yong"},[Object(t["i"])("a",{class:"header-anchor",href:"#jin-yong"}),Object(t["k"])(" 禁用")],-1),b=Object(t["i"])("blockquote",null,[Object(t["i"])("p",null,[Object(t["k"])("添加 "),Object(t["i"])("code",null,"disabled"),Object(t["k"])(" 属性 禁用 "),Object(t["i"])("code",null,"checkbox")])],-1),h=Object(t["i"])("p",null,[Object(t["k"])("当状态改变时，会触发 "),Object(t["i"])("code",null,"change"),Object(t["k"])(" 事件")],-1),s=Object(t["i"])("pre",null,[Object(t["i"])("code",{class:"html"},'<template>\n  <x-checkbox label="one" @change="change" />\n  <x-checkbox label="two" disabled />\n  <x-checkbox label="three" disabled checked />\n  <x-checkbox label="four" disabled checked> four </x-checkbox>\n</template>\n<script>\n  import {getCurrentInstance} from \'vue\'\n  export default {\n    setup(){\n      const instance = getCurrentInstance()\n      const {$message} = instance.appContext.config.globalProperties\n\n      const change = (value) => {\n        $message[value ? \'success\' : \'error\'](value)\n      }\n\n      return {\n        change\n      }\n    }\n  }\n<\/script>\n')],-1),p=Object(t["j"])('<h2 id="checkbox-zu"><a class="header-anchor" href="#checkbox-zu"></a> checkbox 组</h2><blockquote><p>使用 <code>CheckboxGroup</code> 配合数组来生成组合。在组合使用时，<code>Checkbox</code> 使用 <code>label</code> 来自动判断选中状态。每个 <code>Checkbox</code> 的内容可以自定义，如不填写则默认使用 <code>label</code> 的值</p></blockquote>',2),k=Object(t["i"])("pre",null,[Object(t["i"])("code",{class:"html"},'<template>\n  <x-checkbox-group v-model="options">\n    <x-checkbox label="one" disabled />\n    <x-checkbox label="two" />\n    <x-checkbox label="three"  />\n    <x-checkbox label="four"  />\n    <x-checkbox label="five" disabled />\n  </x-checkbox-group>\n  \n  <div style="margin-top: 10px">\n  选中的值：{{options}}\n  </div>\n</template>\n\n<script>\n  import {reactive} from \'vue\'\n  export default {\n    setup(){\n      const options = reactive([\'one\', \'two\'])\n      \n      return {\n        options,\n      }\n    }\n  }\n<\/script>\n')],-1),f=Object(t["i"])("h2",{id:"kong-zhi-checkbox"},[Object(t["i"])("a",{class:"header-anchor",href:"#kong-zhi-checkbox"}),Object(t["k"])(" 控制 checkbox")],-1),m=Object(t["i"])("blockquote",null,[Object(t["i"])("p",null,"其他组件控制进行数据联动")],-1),j=Object(t["i"])("pre",null,[Object(t["i"])("code",{class:"html"},'<template>\n   <x-checkbox label="checkbox" :disabled="disabled" v-model="checked" />\n  \n  <div style="margin-top: 10px">\n    <x-button type="success" size=\'sm\' @click="checked = !checked">{{checked ? \'Checked\' : \'Unchecked\'}}</x-button>\n    <x-button type="danger" size=\'sm\' @click="disabled = !disabled">{{disabled ? \'Disabled\' : \'Enabled\'}}</x-button>\n  </div>\n\n</template>\n\n<script>\n  import {ref} from \'vue\'\n  export default {\n    setup(){\n      const disabled = ref(true)\n      const checked = ref(true)\n\n      return {\n        checked,\n        disabled\n      }\n    }\n  }\n<\/script>\n')],-1),x=Object(t["i"])("h2",{id:"bu-ju"},[Object(t["i"])("a",{class:"header-anchor",href:"#bu-ju"}),Object(t["k"])(" 布局")],-1),O=Object(t["i"])("blockquote",null,[Object(t["i"])("p",null,[Object(t["i"])("code",null,"Checkbox"),Object(t["k"])(" 与 "),Object(t["i"])("code",null,"Grid"),Object(t["k"])(" 组件一起使用，可以实现灵活的布局。")])],-1),v=Object(t["i"])("pre",null,[Object(t["i"])("code",{class:"html"},"<template>\n  <x-row>\n    <x-col v-for=\"item in options\" style=\"margin-bottom: 10px\">\n      <x-checkbox v-model=\"item.checked\" v-bind=\"item\" >options {{item.label}}</x-checkbox>\n    </x-col>\n  </x-row>\n</template>\n  \n<script>\n  import {reactive} from 'vue'\n  export default {\n    setup(){\n      const options = reactive([{\n        label: 'one',\n        checked: true,\n        disabled: true,\n      },\n      {\n        label: 'two',\n        checked: true,\n        disabled: false,\n      },\n      {\n        label: 'three',\n        checked: false,\n        disabled: false,\n      },\n      {\n        label: 'four',\n        checked: false,\n        disabled: true,\n      },\n      {\n        label: 'five',\n        checked: false,\n        disabled: false,\n      }])\n      \n      return {\n        options,\n      }\n    }\n  }\n<\/script>\n")],-1);function g(e,n,c,g,y,C){var w=Object(t["G"])("element-demo0"),V=Object(t["G"])("demo-block"),Q=Object(t["G"])("element-demo1"),z=Object(t["G"])("element-demo2"),q=Object(t["G"])("element-demo3"),G=Object(t["G"])("element-demo4");return Object(t["z"])(),Object(t["h"])("section",l,[o,r,a,u,Object(t["l"])(V,null,{source:Object(t["Q"])((function(){return[Object(t["l"])(w)]})),highlight:Object(t["Q"])((function(){return[i]})),_:1}),d,b,Object(t["l"])(V,null,{source:Object(t["Q"])((function(){return[Object(t["l"])(Q)]})),highlight:Object(t["Q"])((function(){return[s]})),default:Object(t["Q"])((function(){return[h]})),_:1}),p,Object(t["l"])(V,null,{source:Object(t["Q"])((function(){return[Object(t["l"])(z)]})),highlight:Object(t["Q"])((function(){return[k]})),_:1}),f,m,Object(t["l"])(V,null,{source:Object(t["Q"])((function(){return[Object(t["l"])(q)]})),highlight:Object(t["Q"])((function(){return[j]})),_:1}),x,O,Object(t["l"])(V,null,{source:Object(t["Q"])((function(){return[Object(t["l"])(G)]})),highlight:Object(t["Q"])((function(){return[v]})),_:1})])}var y=c("5530"),C=c("1487"),w=c.n(C),V={name:"component-doc",components:{"element-demo0":function(){var e=t["G"],n=t["z"],c=t["f"];function l(t,l){var o=e("x-checkbox");return n(),c(o,{modelValue:t.checked,"onUpdate:modelValue":function(e){return t.checked=e},label:"Checkbox"},null,8,["modelValue","onUpdate:modelValue"])}var o=t["C"],r={setup:function(){var e=o(!0);return{checked:e}}};return Object(y["a"])({mounted:function(){this.$nextTick((function(){var e=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(e,w.a.highlightBlock)}))},render:l},r)}(),"element-demo1":function(){var e=t["G"],n=t["l"],c=t["k"],l=t["Q"],o=t["a"],r=t["z"],a=t["h"];function u(t,u){var i=e("x-checkbox");return r(),a(o,null,[n(i,{label:"one",onChange:t.change},null,8,["onChange"]),n(i,{label:"two",disabled:""}),n(i,{label:"three",disabled:"",checked:""}),n(i,{label:"four",disabled:"",checked:""},{default:l((function(){return[c(" four ")]})),_:1})],64)}var i=t["n"],d={setup:function(){var e=i(),n=e.appContext.config.globalProperties.$message,c=function(e){n[e?"success":"error"](e)};return{change:c}}};return Object(y["a"])({mounted:function(){this.$nextTick((function(){var e=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(e,w.a.highlightBlock)}))},render:u},d)}(),"element-demo2":function(){var e=t["G"],n=t["l"],c=t["Q"],l=t["J"],o=t["i"],r=t["a"],a=t["z"],u=t["h"];function i(t,i){var d=e("x-checkbox"),b=e("x-checkbox-group");return a(),u(r,null,[n(b,{modelValue:t.options,"onUpdate:modelValue":function(e){return t.options=e}},{default:c((function(){return[n(d,{label:"one",disabled:""}),n(d,{label:"two"}),n(d,{label:"three"}),n(d,{label:"four"}),n(d,{label:"five",disabled:""})]})),_:1},8,["modelValue","onUpdate:modelValue"]),o("div",{style:{"margin-top":"10px"}}," 选中的值："+l(t.options),1)],64)}var d=t["B"],b={setup:function(){var e=d(["one","two"]);return{options:e}}};return Object(y["a"])({mounted:function(){this.$nextTick((function(){var e=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(e,w.a.highlightBlock)}))},render:i},b)}(),"element-demo3":function(){var e=t["G"],n=t["l"],c=t["J"],l=t["k"],o=t["Q"],r=t["i"],a=t["a"],u=t["z"],i=t["h"];function d(t,d){var b=e("x-checkbox"),h=e("x-button");return u(),i(a,null,[n(b,{label:"checkbox",disabled:t.disabled,modelValue:t.checked,"onUpdate:modelValue":function(e){return t.checked=e}},null,8,["disabled","modelValue","onUpdate:modelValue"]),r("div",{style:{"margin-top":"10px"}},[n(h,{type:"success",size:"sm",onClick:function(e){return t.checked=!t.checked}},{default:o((function(){return[l(c(t.checked?"Checked":"Unchecked"),1)]})),_:1},8,["onClick"]),n(h,{type:"danger",size:"sm",onClick:function(e){return t.disabled=!t.disabled}},{default:o((function(){return[l(c(t.disabled?"Disabled":"Enabled"),1)]})),_:1},8,["onClick"])])],64)}var b=t["C"],h={setup:function(){var e=b(!0),n=b(!0);return{checked:n,disabled:e}}};return Object(y["a"])({mounted:function(){this.$nextTick((function(){var e=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(e,w.a.highlightBlock)}))},render:d},h)}(),"element-demo4":function(){var e=t["E"],n=t["a"],c=t["z"],l=t["h"],o=t["J"],r=t["k"],a=t["G"],u=t["q"],i=t["Q"],d=t["l"],b=t["f"];function h(t,h){var s=a("x-checkbox"),p=a("x-col"),k=a("x-row");return c(),b(k,null,{default:i((function(){return[(c(!0),l(n,null,e(t.options,(function(e){return c(),b(p,{style:{"margin-bottom":"10px"}},{default:i((function(){return[d(s,u({modelValue:e.checked,"onUpdate:modelValue":function(n){return e.checked=n}},e),{default:i((function(){return[r("options "+o(e.label),1)]})),_:2},1040,["modelValue","onUpdate:modelValue"])]})),_:2},1024)})),256))]})),_:1})}var s=t["B"],p={setup:function(){var e=s([{label:"one",checked:!0,disabled:!0},{label:"two",checked:!0,disabled:!1},{label:"three",checked:!1,disabled:!1},{label:"four",checked:!1,disabled:!0},{label:"five",checked:!1,disabled:!1}]);return{options:e}}};return Object(y["a"])({mounted:function(){this.$nextTick((function(){var e=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(e,w.a.highlightBlock)}))},render:h},p)}()}};V.render=g;n["default"]=V}}]);
//# sourceMappingURL=chunk-2d0bd8ef.8b4e5fdf.js.map