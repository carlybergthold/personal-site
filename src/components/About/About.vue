<template>
  <div id="about" class="about-section">
    <div>
About
    </div>
  </div>
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
    },
    getClickedImageStyle(isClicked) {
      return isClicked ? 'background: white; color: var(--background-color)' : '';
    }
  },
  data() {
    return { 
      aboutMeSubtitle: "Languages have always been a part of my life, from learning to read music as a kid to studying journalism in college and then becoming proficient (ok, passable) in Serbian during my English-teaching years. So when I began coding in my digital marketing job, the language of software development came naturally. Now you can find me programming daily - when I'm not outside, eating (probably fries), or nose-first in a book.",
      images: [
        { name: 'airplane', source: require(`@/assets/images/about/airplane.png`), 
        message: "I've been to 40 countries (and counting!)", isHovering: false },
        { name: 'whiskey', source: require(`@/assets/images/about/whiskey.png`), 
        message: "I'll take a whiskey (neat) and a cigar, thanks", isHovering: false },
      { name: 'barbell', source: require(`@/assets/images/about/barbell.png`), 
        message: "I'll try any workout at least once!", isHovering: false },
      { name: 'beer', source: require(`@/assets/images/about/beer.png`), 
        message: "Please guide me to the local brewery", isHovering: false },
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
  },
  computed: {
    getFirstFourImages() {
      return this.images.slice(0, 4);
    },    
    getLastFourImages() {
      return this.images.slice(4, 8);
    }
}
}
</script>

<style scoped>
.about-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>