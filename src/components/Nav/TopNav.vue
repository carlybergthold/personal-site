<template>
  <nav class="nav-bar">
    <div class="nav-bar-brand">
      <router-link to="/home" class="nav-bar-logo">Carly B</router-link>
    </div>
    <div class="nav-bar-menu" id="nav-barMenu">
      <router-link to="/home" class="nav-bar-item" @click="toggleMenu()">Home</router-link>
      <router-link to="/about" class="nav-bar-item" @click="toggleMenu()">About</router-link>
      <!-- <router-link to="/travels" class="nav-bar-item" @click="toggleMenu()">
        <div class="nav-dropdown-parent" @click="showDropdownItems=!showDropdownItems">
          Travels<b-icon pack="fas" icon="angle-down" size="is-small"></b-icon>
        </div>
        <router-link v-if="showDropdownItems" to="/travels" class="nav-dropdown-item nav-bar-item">Stories</router-link>
        <router-link v-if="showDropdownItems" to="/travels" class="nav-dropdown-item nav-bar-item">Beer Map</router-link>
      </router-link> -->
      <div class="carly1" @click="toggleMenu()">
        <div class="carly nav-bar-item">
          <div class="nav-dropdown-parent" @click="showDropdownItems=!showDropdownItems">
            Travels<b-icon pack="fas" icon="angle-down" size="is-small"></b-icon>
          </div>
          <router-link v-if="showDropdownItems" to="/travels" class="nav-dropdown-item"
          @click="showDropdownItems=false">Stories</router-link>
          <router-link v-if="showDropdownItems" to="/map" class="nav-dropdown-item"
          @click="showDropdownItems=false">Beer Map</router-link>
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
  methods: {
    toggleMenu() {
      const navbarMenu = document.getElementById("nav-barMenu");
      navbarMenu.classList.toggle("active");
    }
  },
  data() {
    return {
      showDropdownItems: false
    }
  }
};
</script>

<style lang="scss" scoped>
.carly1 {
  position:relative;
  width: 75px;
}
.carly {
  display:flex;
  flex-direction: column;
  position: absolute;
  top:0;
  left:0;
}
.nav-bar {
  padding: 1rem 1rem 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
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
}

.nav-bar-item:hover {
  background-color: #555;
  border-radius: 4px;
}

.nav-bar-burger {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-bar-burger span {
  display: block;
  width: 25px;
  height: 2px;
  transition: 0.3s;
  background-color: white;
}

.nav-dropdown-parent {
  display: flex;
  align-items: center;
  gap: 5px;
}

// .nav-dropdown-item {
//   position: absolute;
//   margin-top: 0.5rem;
// }

.nav-dropdown-item:hover {
    background-color: #555;
    border-radius: 4px;
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
  }

  .nav-bar-menu.active {
    display: flex;
  }

  .nav-bar-burger {
    display: flex;
  }
}
</style>
