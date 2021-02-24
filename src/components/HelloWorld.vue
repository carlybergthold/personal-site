<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="headline title has-text-black">
          software engineer</p>
        <p class="subtitle">+ travel fiend, amateur chef, & bright yellow bike rider</p>
      </div>
    </div>
    <div class="hero-foot">
        <div class="container has-text-centered">
            <a href="https://www.linkedin.com/in/carlybergthold/" target="_blank">
              <b-icon
                pack="fab"
                icon="linkedin"
                size="is-large"
                type="is-primary">
              </b-icon>
            </a>
            <a href="https://www.instagram.com/carlymita/" target="_blank">
              <b-icon
                pack="fab"
                icon="instagram"
                size="is-large"
                type="is-primary">
              </b-icon>
            </a>
            <a href="https://github.com/carlybergthold" target="_blank">
              <b-icon
                pack="fab"
                icon="github-square"
                size="is-large"
                type="is-primary">
              </b-icon>
            </a>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  title: 'Carly Bergthold - Home',
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
  text-shadow: 1px 1px 0px var(--teal),
	4px 2px 0px var(--teal),
	5px 3px 0px var(--teal),
	4px 4px 0px var(--teal);
}
</style>