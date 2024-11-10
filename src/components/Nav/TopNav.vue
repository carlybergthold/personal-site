<template>
  <b-navbar class="has-background-black">
    <template #brand>
      <b-navbar-item>
        <router-link to="/home">
          <span
            class="teal-text nav-link"
            >c</span
          >
          <span
            class="yellow-text nav-link"
            >a</span
          >
          <span
            class="orange-text nav-link"
            >r</span
          >
          <span
            class="green-text nav-link"
            >l</span
          >
          <span
            class="pink-text nav-link"
            >y</span
          >

          <span class="hidden-in-mobile">

            
            <span class="nav-link teal-text ml-5"
            >b</span
            >
            <span class="nav-link yellow-text"
            >e</span
            >
            <span class="nav-link orange-text"
            >r</span
            >
            <span class="nav-link green-text"
            >g</span
            >
            <span class="nav-link pink-text"
            >t</span
            >
            <span class="nav-link teal-text"
            >h</span
            >
            <span class="nav-link yellow-text"
            >o</span
            >
            <span class="nav-link orange-text"
            >l</span
            >
            <span class="nav-link green-text"
            >d</span
            >
          </span>
        </router-link>
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item class="hidden-in-desktop">
        <router-link to="/home" class="nav-link">Home</router-link>
      </b-navbar-item>
      <b-navbar-item>
        <router-link to="/about" class="nav-link">About</router-link>
      </b-navbar-item>
      <b-navbar-item>
        <router-link to="/travels" class="nav-link">Travels</router-link>
      </b-navbar-item>
      <b-navbar-item>
        <router-link to="/projects" class="nav-link">Projects</router-link>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "TopNav",
};
</script>

<style lang="scss" scoped>
.navbar-brand .nav-link {
  margin-left: 0.6rem;
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
}
@media screen and (min-width: 1023px) {
  .hidden-in-desktop {
    display: none;
  }
}
@media screen and (max-width: 640px) {
  .nav-link {
    margin-left: 0.6rem;
    font-size: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;
  }
  .hidden-in-mobile {
    display: none;
  }
}
</style>
