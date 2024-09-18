<template>
  <div class="location-container">
    <div class="has-text-weight-bold has-text-centered">{{ title }}</div>
    <div class="has-text-centered">{{ dates }}</div>
    <img v-if="imagePath" :src="imagePath" class="vertical-blog-image" alt="Location Image">
    <div v-if="imageDescription" class="image-description">{{ imageDescription }}</div>
    <div v-if="comingSoon">Coming soon!</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
        type: String,
        required: true
    },
    dates: {
        type: String,
        required: true
    },
    imageFile: {
        type: String,
        required: false,
        default: null
    },
    imageDescription: {
        type: String,
        required: false,
        default: null
    },
    comingSoon: {
        type: Boolean,
        required: false,
        default: false
    }
  },
  computed: {
    imagePath() {
        if (this.imageFile) {
            return require(`@/assets/images/${this.imageFile}`);
        }
    }
  }
};
</script>

<style scoped>
.location-container {
    display: flex;
    flex-flow: column;
    align-items: center;
}
.vertical-blog-image {
  width: 20rem;
  border-radius: 10px;
}
.horizontal-blog-image {
  width: 25rem !important;
  border-radius: 10px;
}
.image-description {
  font-size: 0.8rem;
  font-weight: 600;
  font-style: italic;
}
</style>
