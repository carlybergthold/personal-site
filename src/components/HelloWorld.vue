<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="headline title has-text-black">
          software engineer</p>
        <p class="subtitle">+ travel fiend, amateur cook, & bright yellow bike rider</p>
      </div>
    </div>
    <div class="hero-foot">
      <nav class="tabs is-fullwidth">
        <div class="container has-text-centered">
          <b-icon
              pack="fab"
              icon="linkedin"
              size="is-large"
              type="is-primary">
          </b-icon>
          <b-icon
              pack="fab"
              icon="github-square"
              size="is-large"
              type="is-primary">
          </b-icon>
          <b-icon
              pack="fab"
              icon="twitter-square"
              size="is-large"
              type="is-primary">
          </b-icon>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.top-section {
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.headline {
  font-size: 4rem;
  font-weight: 800;
  text-shadow: 1px 1px 0px var(--teal),
	4px 2px 0px var(--teal),
	5px 3px 0px var(--teal),
	4px 4px 0px var(--teal);
}
</style>