<template>
  <header class="top-menu">
    <div class="logo">carly</div>
      <div class="menu-container">
      <div class="dots-grid">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      </div>
  </header>
</template>

<script>
export default {
  name: "TopNav",
  methods: {
    toggleMenu() {

    }
  }
};
</script>

<style lang="scss" scoped>
.menu-container {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  // background:pink;
}
.dots-grid {
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-flow: row wrap;
  cursor: pointer;
}

.dots-grid .dot {
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
}
</style>
