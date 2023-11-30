<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <img src="@/assets/images/cam-and-carly.jpeg" class="us-image">
        <p class="headline title teal-text h3">where are cam & carly?</p>
        <p class="subtitle current-state">
            <b-icon pack="fas" icon="angle-double-right" size="is-medium"></b-icon>
            currently in Nashville, TN until January 1st, 2024</p>
        <p class="orange-text"><b>Next stop: Panama City Beach, FL - Jan. 1st to Feb. 1st</b></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Travels',
  title: 'Carly Bergthold - Travels'
}
</script>

<style scoped>
.headline {
  font-size: 2.5rem;
}
p {
  margin: 1rem 0 !important;
}
.us-image {
  width: 20rem;
  border-radius: 10px;
}
.current-state {
  display: flex;
  justify-content: center;
}
</style>