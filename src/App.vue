<template>
  <div class="wrapper">
    <div class="sidebar-nav">
    <div class="sidebar-menu">
      <teleport to="body">
      <router-link to="/" title="RelaxPlus">
        <div class="logo-img">
          <span></span>
        </div>
      </router-link>
      </teleport>
      <div v-for="menu in nav" class="menu">
        <dl v-if="menu.child">
          <dt># {{ menu.title }}</dt>
          <dd v-for="submenu in menu.child">
            <router-link :to="submenu.routePath">{{
              submenu.title
            }}</router-link>
          </dd>
        </dl>
        <router-link v-else :to="menu.routePath">{{ menu.title }}</router-link>
      </div>
    </div>
    </div>
    <div class="content-page">
      <router-view />
    </div>
  </div>
  <div class="content-menu">
    <x-tooltip content="去仓库" placement="bottom-end">
    <a href="https://github.com/yanghuanrong/RelaxPlus" target="__blank" class="item">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%" stroke="currentColor" stroke-width="0" stroke-linejoin="round" stroke-linecap="round" class="icon"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
    </a>
    </x-tooltip>
    <x-tooltip content="日夜更替" placement="bottom-end">
    <div class="item" @click="handleToggle">
      <svg v-if="toggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor" stroke="currentColor"  width="100%" height="100%"><path d="M512 204.8c-169.7 0-307.2 137.603-307.2 307.2 0 169.7 137.5 307.2 307.2 307.2S819.2 681.7 819.2 512c0-169.597-137.5-307.2-307.2-307.2zM477.804 0h68.3v136.5h-68.3zm0 887.5h68.3V1024h-68.3zM270.598 222.414l-48.299 48.298-96.5-96.5 48.298-48.299zm-48.293 530.995l48.298 48.299-96.495 96.5-48.298-48.298zM0 477.901h136.5v68.3H0zm887.5 0H1024v68.3H887.5zm10.702 372.002l-48.3 48.299-96.596-96.598 48.298-48.298zM753.402 222.4l48.299 48.3 96.603-96.502L850 125.901z"></path></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor" stroke="currentColor" width="100%" height="100%"><path d="M888.16 678.96c-127.793 31.948-261.975-12.78-357.82-102.235-127.793-127.792-153.351-325.871-57.507-479.223 31.948-44.727-12.78-108.623-70.286-95.844-95.844 19.169-185.3 70.286-255.585 140.572C51.117 238.075 0 372.257 0 506.44c0 134.182 51.117 268.364 153.351 364.209C249.196 972.883 376.99 1024 517.561 1024c140.572 0 268.364-51.117 364.21-153.351 25.558-25.559 51.116-57.507 76.675-95.845 25.558-44.727-12.78-108.624-70.286-95.844z"></path><path d="M1003.173 238.075c25.559-25.559 25.559-63.897 0-89.455-25.558-25.559-63.896-25.559-89.455 0-19.169 19.168-83.065 19.168-102.234 0-25.559-25.559-63.896-25.559-89.455 0-25.558 25.558-25.558 63.896 0 89.455 19.169 19.168 19.169 83.065 0 102.234-25.558 25.558-25.558 63.896 0 89.455 25.559 25.558 63.896 25.558 89.455 0 19.169-19.17 83.065-19.17 102.234 0 25.559 25.558 63.897 25.558 89.455 0 25.559-25.559 25.559-63.897 0-89.455-19.169-19.17-19.169-83.066 0-102.234z"></path></svg>
    </div>
    </x-tooltip>
  </div>
</template>

<script>
import routes from "@/router/data";
import { ref } from 'vue';
export default {
  setup() {
    const nav = useNav()

    const {toggle, handleToggle} = useToggle()

    return {
      nav,
      toggle,
      handleToggle
    };
  },
}

const useToggle = () => {
  const theme = localStorage.getItem('color-mode')
  const DARK = 'dark'
  const LIGHT = 'light'
  const toggle = ref(theme === DARK)

  const setToggle = () => {
    if(toggle.value) {
      localStorage.setItem('color-mode', DARK)
      document.documentElement.setAttribute('data-color-mode', DARK)
    } else {
      localStorage.setItem('color-mode', LIGHT)
      document.documentElement.setAttribute('data-color-mode', LIGHT)
    }
  }
  const handleToggle = () => {
    toggle.value = !toggle.value
    setToggle()
  }
  setToggle()

  return {
    toggle,
    handleToggle
  }
}

const useNav = () => {
  const menu = [];
  const submenu = [];

  routes.data.forEach((item) => {
    if (item.tag) {
      let index = null;
      submenu.forEach((i, k) => {
        if (i.title === item.tag) {
          index = k;
        }
      });

      if (index !== null) {
        submenu[index].child.push(item);
      } else {
        submenu.push({
          title: item.tag,
          child: [item],
        });
      }
    } else {
      menu.push(item);
    }
  });

  return menu.concat(submenu);
};
</script>
