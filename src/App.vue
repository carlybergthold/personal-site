<template>
  <div id="app">
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

</style>