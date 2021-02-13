<template>
  <b-navbar class="has-background-black">
    <template #brand>
      <b-navbar-item>
        <router-link to="/home">
          <span
            :class="$mq.above(640) ? 'nav-link-desktop' : 'nav-link-mobile'"
            class="teal-text"
            >c</span
          >
          <span
            :class="$mq.above(640) ? 'nav-link-desktop' : 'nav-link-mobile'"
            class="yellow-text"
            >a</span
          >
          <span
            :class="$mq.above(640) ? 'nav-link-desktop' : 'nav-link-mobile'"
            class="orange-text"
            >r</span
          >
          <span
            :class="$mq.above(640) ? 'nav-link-desktop' : 'nav-link-mobile'"
            class="green-text"
            >l</span
          >
          <span
            :class="$mq.above(640) ? 'nav-link-desktop' : 'nav-link-mobile'"
            class="pink-text"
            >y</span
          >

          <span v-if="$mq.above(640)" class="nav-link-desktop teal-text ml-5"
            >b</span
          >
          <span v-if="$mq.above(640)" class="nav-link-desktop yellow-text"
            >e</span
          >
          <span v-if="$mq.above(640)" class="nav-link-desktop orange-text"
            >r</span
          >
          <span v-if="$mq.above(640)" class="nav-link-desktop green-text"
            >g</span
          >
          <span v-if="$mq.above(640)" class="nav-link-desktop pink-text"
            >t</span
          >
          <span v-if="$mq.above(640)" class="nav-link-desktop teal-text"
            >h</span
          >
          <span v-if="$mq.above(640)" class="nav-link-desktop yellow-text"
            >o</span
          >
          <span v-if="$mq.above(640)" class="nav-link-desktop orange-text"
            >l</span
          >
          <span v-if="$mq.above(640)" class="nav-link-desktop green-text"
            >d</span
          >
        </router-link>
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item v-if="!$mq.above(1023)">
        <router-link to="/home" class="nav-link">Home</router-link>
      </b-navbar-item>
      <b-navbar-item>
        <router-link to="/about" class="nav-link">About</router-link>
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
.nav-link-desktop {
  margin-left: 0.6rem;
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
}
.nav-link-mobile {
  margin-left: 0.6rem;
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
}
.teal-text {
  color: var(--teal);
}
.yellow-text {
  color: var(--yellow);
}
.orange-text {
  color: var(--orange);
}
.green-text {
  color: var(--green);
}
.pink-text {
  color: var(--pink);
}
</style>
