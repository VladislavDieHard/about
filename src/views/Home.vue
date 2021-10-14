<template>
  <div class="home p-grid">
    <info class="p-col-7"></info>
    <profile class="p-col-3"></profile>
  </div>
</template>

<script>

import Profile from "../components/components.home/Profile";
import Info from "../components/components.home/Info";

export default {
  name: 'Home',
  components: {
    Profile,
    Info
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    justify-content: center;
    margin-top: 1vw;
  }
</style>
