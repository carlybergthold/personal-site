<template>
  <div>
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-one-third project-description">
            <p class="headline title has-text-black">Scoot Scout</p>
            <p class="subtitle">React.js, JSON server, Leaflet, Mapbox, several APIs</p>
            <p>Electric scooters have revolutionized the way city dwellers get around, and more and more scooter companies are popping up to meet the demand. But why waste time opening up each company's app to locate your nearest ride?
            At Scoot Scout, we aren't brand loyal; we're scoot loyal. Simply open up the app, and you can see all the scooters near you. Yeah. Take that, Big Scooter.</p>
            <p class="mt-4 is-size-5 has-text-weight-bold">
              <a href="https://youtu.be/BUvpbtT1OBQ" target="_blank">Watch the demo --></a>
            </p>
          </div>
          <div class="column">
            <figure class="image">
              <img src="@/assets/images/scoot-scout-tri.jpg">
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight-with-navbar has-background-primary">
      <div class="hero-body">
        <div class="columns">
          <div class="column">
            <div class="tile is-ancestor">
              <div class="tile is-parent is-6">
                <figure class="image attribute-image">
                  <img src="@/assets/images/attributes-home.png">
                </figure>
              </div>
              <div class="tile is-parent is-6">
                <figure class="image attribute-image">
                  <img src="@/assets/images/attributes-detail.png">
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
                  <img src="@/assets/images/attributes-personality.png">
                </figure>
              </div>
            </div>
          </div>
          <div class="column is-one-third project-description">
            <p class="headline title has-text-black">Attribute Project</p>
            <p class="subtitle">Tech used: React, Google Firebase</p>
            <p>A friend's passion project - this site (yet to be published) allows you to take a quiz to find your "spiritual personality." Think of it like finding out your Enneagram or Myers Briggs type.</p>
            <p class="mt-4 is-size-5 has-text-weight-bold">
              <a href="https://youtu.be/BUvpbtT1OBQ" target="_blank" class="attribute-link">View on Github --></a>
            </p>
          </div>

        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.headline {
  font-size: 2.5rem;
  font-weight: 800;
  text-shadow: 1px 1px 0px var(--orange),
	4px 2px 0px var(--orange),
	5px 3px 0px var(--orange),
	4px 4px 0px var(--orange);
}
.project-description {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
}
.attribute-link {
  color: black;
}
</style>