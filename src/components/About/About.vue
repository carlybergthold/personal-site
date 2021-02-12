<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title headline has-text-black">About Me</p>
        <p class="subtitle">A software developer with a background in digital marketing, I love enhancing web- and app-based user interactions with the power of programming. Learning to code has given me the ability not only to continuously learn and improve, but to give people better experiences with technology while I'm at it.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  },
  data() {
    return { checked: false, title: 'Check me' }
  },
  methods: {
    mounted() { console.log("mounted") }
  }
}
</script>

<style scoped>
.headline {
  font-size: 3rem;
  font-weight: 800;
  text-shadow: 1px 1px 0px var(--yellow),
	4px 2px 0px var(--yellow),
	5px 3px 0px var(--yellow),
	4px 4px 0px var(--yellow);
}
</style>