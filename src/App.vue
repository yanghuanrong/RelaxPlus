<template>
  <div class="wrapper">
    <div class="sidebar-menu" style="width: 225px">
      <div style="padding: 20px">
        <router-link to="/">
          <div class="logo-img">
            <span></span>
          </div>
        </router-link>
      </div>
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
    <div class="content-page">
      <router-view />
    </div>
  </div>
</template>

<script>
import routes from "@/router/data";
export default {
  setup() {
    const nav = useNav();

    console.log(nav);
    return {
      nav,
    };
  },
};

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
        submenu[i].child.push(item);
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
