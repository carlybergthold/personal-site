<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="headline title teal-text h3">are you lost, friend?</p>
        <p class="mt-4 is-size-5 has-text-weight-bold link-holder">
          <router-link to="/travels" class="home-link">GO HOME
          </router-link>
            <b-icon
              pack="fas"
              icon="angle-double-right"
              size="is-medium">
            </b-icon>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: '404 Page',
  title: 'Carly Bergthold - Lost Your Way?'
}
</script>

<style scoped>
.headline {
  font-size: 2.5rem;
}
p {
  margin: 1rem 0 !important;
}
.link-holder {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--orange);
}
.home-link {
  color: var(--orange);
}
</style>