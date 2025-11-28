<template>
  <nav class="nav-bar">
    <div class="nav-bar-brand">
      <router-link to="/home" class="nav-bar-logo">CB</router-link>
    </div>
    <div class="nav-bar-menu" id="nav-barMenu">
      <router-link to="/home" class="nav-bar-item" @click="toggleMenu()">Home</router-link>
      <router-link to="/about" class="nav-bar-item" @click="toggleMenu()">About</router-link>
      <router-link to="/travels" class="nav-bar-item hidden-in-desktop" @click="toggleMenu()">Blog</router-link>
      <router-link to="/map" class="nav-bar-item hidden-in-desktop" @click="toggleMenu()">Map</router-link>
      <div class="nav-bar-item nav-dropdown-parent hidden-in-mobile"
           @mouseenter="showDropdownItems = true"
           @mouseleave="showDropdownItems = false">
        Travels
        <svg style="margin-left: 2px;" width="12" height="12" viewBox="0 0 20 20"><path d="M5.5 8l4.5 4 4.5-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
        <div v-if="showDropdownItems" class="nav-dropdown-menu">
          <router-link to="/travels" class="nav-dropdown-item" @click="toggleMenu()">Blog</router-link>
          <router-link to="/map" class="nav-dropdown-item" @click="toggleMenu()">Map</router-link>
        </div>
      </div>
      <router-link to="/projects" class="nav-bar-item" @click="toggleMenu()">Projects</router-link>
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
  data() {
    return {
      showDropdownItems: false
    }
  },
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
  color: var(--primary-font-color);;
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

.nav-dropdown-parent {
  position: relative;
}

.nav-dropdown-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
}

.nav-bar-item {
  text-decoration: none;
  padding: 8px 12px;
  color: var(--primary-font-color);
}

.router-link-active {
  font-weight: 900;
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
  background-color: var(--primary-font-color);;
  transition: 0.3s;
  z-index: 600;
}

.hidden-in-desktop {
  display: none;
}

@media (max-width: 768px) {
  .nav-bar-menu {
    display: none;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 40%;
    background-color: #ffffffed;
    padding-top: 4rem;
    padding-left: 0.4rem;
    font-size: larger;
    font-weight: 600;
    z-index: 599;
  }

  .nav-bar-menu.active {
    display: flex;
  }

  .nav-bar-burger {
    display: flex;
    color: var(--primary-font-color);
  }

  .hidden-in-mobile {
    display: none;
  }

  .hidden-in-desktop {
    display: block;
  }
}
</style>