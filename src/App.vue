<template>
  <div id="app">
    <TopNav id="top-nav" />
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from './components/Nav/TopNav.vue';

export default {
  name: 'App',
  components: {
    TopNav
  }
}
</script>

<style>
#app {
  font-family: 'Noto Sans JP', sans-serif;
}
.hero {
  background-color: var(--bg-main);
}
</style>