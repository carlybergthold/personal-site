<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered about-me-container">
        <div class="circle-container">
          <div class="center-circle">
            <p class="title headline has-text-primary">about me</p>
            <p class="subtitle mx-6">A software developer with a background in digital marketing, I love enhancing web- and app-based user interactions with the power of programming. Learning to code has given me the ability not only to continuously learn and improve, but to give people better experiences with technology while I'm at it.</p>
            <p class="subtitle mx-6">My partner and I tried "slow traveling" last year. Visit <router-link to="/travels" style="text-decoration: underline;">the travel page</router-link> to learn more!</p>
          </div>
          <div v-for="(image, index) in images" :key="image.name" class="circle-image-container" 
            @mouseover="image.isHovering = true" @mouseleave="image.isHovering = false"
            :style="getImagePlacement(index)"
          >
            <img v-show="!image.isHovering" :src="image.source" class="circle-image" :alt="image.name" :style="offsetRotation(index)">
            <div v-show="image.isHovering" class="circle-message" :style="offsetRotation(index)">{{ image.message }}</div>
          </div>
        </div>
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
  methods: {
    getImagePlacement(index) {
      const rotation = (index + 1) * 45;
      return `transform: translate(-50%, -50%) rotate(${rotation}deg) translateY(-400px)`;
    },
    offsetRotation(index) {
      const rotation = (index + 1) * 45;
      return `transform: rotate(-${rotation}deg)`;
    }
  },
  data() {
    return { 
      images: [
        { name: 'airplane', source: require(`@/assets/images/about/airplane.png`), 
        message: "I've been to 39 countries (and counting!)", isHovering: false },
        { name: 'whiskey', source: require(`@/assets/images/about/whiskey.png`), 
        message: "I'll take a whiskey (neat) and a cigar, thanks", isHovering: false },
      { name: 'barbell', source: require(`@/assets/images/about/barbell.png`), 
        message: "I'll try any gym once! Currently doing CrossFit", isHovering: false },
      { name: 'beer', source: require(`@/assets/images/about/beer.png`), 
        message: "I will visit the local brewery as soon as I get into town", isHovering: false },
      { name: 'bike', source: require(`@/assets/images/about/bike.png`), 
        message: "I'm showing up with helmet hair. Oh well", isHovering: false },
      { name: 'cooking', source: require(`@/assets/images/about/cooking.png`), 
        message: "Trying a new recipe is the best way to unwind after work", isHovering: false },
      { name: 'mountains', source: require(`@/assets/images/about/mountains.png`), 
        message: "I adore hiking and would like to start backpacking", isHovering: false },
      { name: 'pizza', source: require(`@/assets/images/about/pizza.png`), 
        message: "Trying new restaurants IS a hobby. Fight me", isHovering: false }
      ]
    }
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
.circle-container {
  position: relative;
  width: 800px;
  height: 800px;
  margin: 50px auto;
}
.center-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px; 
  height: 600px; 
  border-radius: 50%;
  background-color: #eee;
  padding: 10%;
}
.circle-image-container {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid white;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.circle-image {
  width: 150px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  position: relative;
}
.circle-message {
  padding: 16px;
}
</style>