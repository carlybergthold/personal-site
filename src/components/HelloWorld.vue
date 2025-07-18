<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="homepage-card">
        <div class="container">
          <p class="headline title">software engineer</p>
          </div>
        </div>
        <div class="homepage-card-footer">
          <p class="subtitle">+ travel fiend, potato lover, & local cat finder</p>
      </div>
    </div>
    <div class="doodle-1"></div>
    <div class="doodle-2"></div>
    <!-- <div class="doodle-3"></div> -->
    
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
.hero {
  background-color: var(--color-purple);
}
.hero-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.homepage-card {
  background-color: var(--color-peach);
  border-radius: 12px;
  width: 100%;
}
.homepage-card-footer {
  width: 100%;
  border: 2px solid var(--color-peach);
  border-radius: 0 0 12px 12px;
  margin-top: -8px;
}
.top-section {
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 3rem;
  color: black;
  padding: 1rem;
}
.subtitle {
  color: black;
  padding: 1rem;
}
/* .doodle-1 {
  height: 2rem;
  width: 2rem;
  background-color: var(--color-pink);
}
.doodle-2 {
  height: 2rem;
  width: 2rem;
  background-color: var(--color-teal);
}
.doodle-3 {
  height: 2rem;
  width: 2rem;
  background-color: var(--color-lilac);
} */
.doodle-1 {
  background-color: var(--color-pink);
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;
  transform: rotate(20deg);
}
.doodle-1:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  width: 40px;
  background-color: var(--color-pink);
  transform: rotate(135deg);
}
.doodle-2 {
  background-color: var(--color-teal);
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;
}
.doodle-2:before,
.doodle-2:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  width: 40px;
  background-color: var(--color-teal);
}
.doodle-2:before {
  transform: rotate(30deg);
}
.doodle-2:after {
  transform: rotate(60deg);
}
/* .pac-man {
  width: 0px;
  height: 0px;
  border-right: 29px solid transparent;
  border-top: 29px solid #333;
  border-left: 29px solid #333;
  border-bottom: 29px solid #333;
  border-top-left-radius: 29px;
  border-top-right-radius: 29px;
  border-bottom-left-radius: 29px;
  border-bottom-right-radius: 29px;
} */
.doodle-3 {
  width: 0;
  height: 0;
  border: 25px solid transparent;
  background-color: var(--color-lilac);
  position: relative;
  top: -25px;
}
.doodle-3:after {
  content: '';
  position: absolute;
  left: -25px;
  top: 25px;
  width: 0;
  height: 0;
  border: 25px solid transparent;
  background-color: var(--color-lilac);
}
</style>