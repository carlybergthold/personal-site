<template>
  <div>
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-one-third project-description">
            <p class="headline title has-text-black">scoot scout</p>
            <p class="subtitle">bootcamp front end capstone
              <br><span class="has-text-weight-light is-size-6">TECH: React.js, JSON server, Leaflet, Mapbox, various APIs</span>
            </p>
            <p>Electric scooters have revolutionized the way city dwellers get around, and more and more scooter companies are popping up to meet the demand. But why waste time opening up each company's app to locate your nearest ride?
            At Scoot Scout, we aren't brand loyal; we're scoot loyal. Simply open up the app, and you can see all the scooters near you. Yeah. Take that, Big Scooter.</p>
            <p class="mt-4 is-size-5 has-text-weight-bold">
              <a href="https://youtu.be/BUvpbtT1OBQ" target="_blank" class="is-flex">Watch the demo
                <b-icon
                  pack="fas"
                  icon="angle-double-right"
                  size="is-medium"
                  type="is-primary">
                </b-icon>
              </a>
            </p>
          </div>
          <div class="column">
            <figure class="image is-flex is-justify-content-center">
              <img src="@/assets/images/scoot-scout-tri.jpg" class="max-image">
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight-with-navbar has-background-primary">
      <div class="hero-body">
        <div class="columns reverse-columns">
          <div class="column">
            <div class="tile is-ancestor">
              <div class="tile is-parent is-6">
                <figure class="image attribute-image">
                  <img src="@/assets/images/attributes-home.png">
                </figure>
              </div>
              <div class="tile is-parent is-6">
                <figure class="image attribute-image">
                  <img src="@/assets/images/attributes-personality.png">
                </figure>
              </div>
            </div>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-6">
                <figure class="image attribute-image">
                  <img src="@/assets/images/attributes-quiz.png">
                </figure>
              </div>
              <div class="tile is-parent is-6">
                <figure class="image attribute-image">
                  <img src="@/assets/images/attributes-detail.png">
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-one-third project-description">
            <p class="headline title has-text-black">personal attributes</p>
            <p class="subtitle">client project (in progress)
              <br><span class="has-text-weight-light is-size-6">TECH: React.js, Bulma, Google Firebase</span>
            </p>
            <p>Discover your "spiritual personality" through quizzes, your interests, or your type from other popular personality frameworks like the Enneagram and Myers Briggs.</p>
            <p class="mt-4 is-size-5 has-text-weight-bold">
              <a href="https://github.com/carlybergthold/attributes" target="_blank" class="attribute-link is-flex">View on Github
                <b-icon
                  pack="fas"
                  icon="angle-double-right"
                  size="is-medium">
                </b-icon>
              </a>
            </p>
          </div>

        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  title: 'Carly Bergthold - Projects'
}
</script>

<style scoped>
.headline {
  text-shadow: 1px 1px 0px var(--orange),
	4px 2px 0px var(--orange),
	5px 3px 0px var(--orange),
	4px 4px 0px var(--orange);
}
.project-description {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}
.attribute-link {
  color: black;
}
@media(max-width: 769px) {
  .reverse-columns {
    flex-direction: column-reverse;
    display: flex;
  }
}
.max-image {
  width: 750px;
}
</style>