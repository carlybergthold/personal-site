<template>
  <nav class="nav-bar">
    <div class="nav-bar-brand">
      <router-link to="/home" class="nav-bar-logo">CB</router-link>
    </div>
    <div class="nav-bar-menu" id="nav-barMenu">
      <router-link to="/home" class="nav-bar-item">Home</router-link>
      <router-link to="/about" class="nav-bar-item">About</router-link>
      <router-link to="/travels" class="nav-bar-item">Travels</router-link>
      <router-link to="/projects" class="nav-bar-item">Projects</router-link>
    </div>
    <button class="nav-bar-burger" @click="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
      </button>
  </nav>
</template>

<script>
export default {
  name: "TopNav",
  methods: {
    toggleMenu() {
      const navbarMenu = document.getElementById("nav-barMenu");
      navbarMenu.classList.toggle("active");
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  padding: 1rem 1rem 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: red;
}

.nav-bar-logo {
  font-size: 2rem;
  font-weight: 600;  
  text-decoration: none;
}

.nav-bar-menu {
  display: flex;
  gap: 20px;
}

.nav-bar-item {
  text-decoration: none;
  padding: 8px 12px;
  color: var(--primary-font-color);
}

.nav-bar-item:hover {
  background-color: #555;
  border-radius: 4px;
}

.nav-bar-burger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-bar-burger span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: red;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .nav-bar-menu {
    display: none;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding-top: 10px;
  }

  .nav-bar-menu.active {
    display: flex;
  }

  .nav-bar-burger {
    display: flex;
    color: red;
  }
}
</style>
