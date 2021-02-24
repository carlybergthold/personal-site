<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title headline has-text-black">about me</p>
        <p class="subtitle mx-6">A software developer with a background in digital marketing, I love enhancing web- and app-based user interactions with the power of programming. Learning to code has given me the ability not only to continuously learn and improve, but to give people better experiences with technology while I'm at it.</p>
      </div>
      <figure class="image airplane">
        <img src="@/assets/images/about/airplane.png" class="max-image">
        <p class="about-caption">I love to travel (who doesn't?!). Next on my list is Russia!</p>
      </figure>
      <figure class="image bike">
        <img src="@/assets/images/about/bike.png" class="max-image">
        <p class="about-caption">Biking to breweries is a thing.</p>
      </figure>
      <figure class="image cooking">
        <img src="@/assets/images/about/cooking.png" class="max-image">
        <p class="about-caption">Cooking is bae! Korean and Indian food have been my jam lately.</p>
      </figure>
      <figure class="image whiskey">
        <img src="@/assets/images/about/whiskey.png" class="max-image">
        <p class="about-caption">In true TN fashion, I'm a whiskey woman.</p>
      </figure>
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
  text-shadow: 1px 1px 0px var(--yellow),
	4px 2px 0px var(--yellow),
	5px 3px 0px var(--yellow),
	4px 4px 0px var(--yellow);
}
.hero-body {
  position: relative;
}
.image {
  width: 15%;
}
.airplane {
  position: absolute;
  top: 2rem;
  right: 5rem;
}
.bike {
  position: absolute;
  bottom: 8rem;
  left: 2rem;
}
.cooking {
  position: absolute;
  bottom: 4rem;
  right: 5rem;
}
.whiskey {
  position: absolute;
  top: 5rem;
}
.about-caption {
  background-color: var(--pink);
}
</style>