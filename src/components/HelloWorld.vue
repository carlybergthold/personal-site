<template>
  <div class="hello-world-page">
    <section id="home" class="hero-section" :style="bgStyle">
      <div class="main-content">
        <div class="chuck-noon title">Carly</div>
        <div class="body">software engineer, travel fiend, potato lover, & local cat finder</div>
        <footer class="scroll-link">
          <router-link :to="{ path: '/home', hash: '#about' }" class="link chuck-noon">About</router-link>
        </footer>
      </div>
    </section>
<!-- Photo by <a href="https://unsplash.com/@plufow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Plufow Le Studio</a> on <a href="https://unsplash.com/photos/a-blurry-image-of-a-red-and-purple-background-5Gdt-KA0zBg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> -->
      
    <AboutPage />
  </div>
</template>

<script>
import AboutPage from '@/components/About/About.vue';
import bg from '@/assets/images/abstract-background.jpg'

export default {
  name: 'HelloWorld',
  components: {
    AboutPage
  },
  title: 'Carly Bergthold - Home',
  computed: {
    bgStyle () {
      return {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }
    }
  }
}
</script>

<style scoped>
.hello-world-page {
  width: 100%;
}
.hero-section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--off-white);
  background-size: cover;
  background-position: center center;
  position: relative;
}
.main-content {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 90%;
  padding: 4rem 1.5rem;
  height: 100%;
}
.title {
  font-size: 6rem;
}
.body {
  font-size: 2rem;
}
.scroll-link {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: var(--off-white);
}
.link {
  text-decoration: none;
  color: var(--off-white);
}
</style>