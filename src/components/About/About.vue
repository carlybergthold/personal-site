<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered about-me-container">
        <div>
          <p class="title headline has-text-primary">about me</p>
          <p class="subtitle mx-6">A software developer with a background in digital marketing, I love enhancing web- and app-based user interactions with the power of programming. Learning to code has given me the ability not only to continuously learn and improve, but to give people better experiences with technology while I'm at it.</p>
          <p class="subtitle mx-6">My husband and I are taking a nomad year to travel the U.S. Visit the travel page to see what we're up to!</p>
          <p class="subtitle mx-6">Some things I love are:</p>
          <div class="list-container">
            <div class="list">
              <ul>&#x2022; Biking to breweries</ul>
              <ul>&#x2022; Cooking and finding new restaurants</ul>
              <ul>&#x2022; Hiking, running, and basically any activity involving movement</ul>
            </div>
          </div>
        </div>
        <!-- <div>
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
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
  props: {
    msg: String
  },
  data() {
    return { checked: false, title: 'Check me' }
  }
}
</script>

<style scoped>
.about-me-container {
  display: flex;
  flex-flow: row wrap;
}
.headline {
  font-size: 3rem;
}
.hero-body {
  position: relative;
}
.image {
  width: 15%;
}
/* .airplane {
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
  top: 1rem;
  left: 3rem;
  width: 10%;
} */
.about-caption {
  background-color: var(--pink);
}
.list-container {
  display: flex;
  justify-content: center;
}
.list {
  text-align: left;
  max-width: 40rem;
}
</style>