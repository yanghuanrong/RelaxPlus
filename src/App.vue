<template>
  <div class="wrapper">
    <div class="sidebar-menu" style="width: 225px">
      <div style="padding: 20px">
        <router-link to="/">
          <div class="logo-img">
            <span>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </router-link>
      </div>
      <router-link to="/button">Button</router-link>
    </div>
    <div class="content-page">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>
