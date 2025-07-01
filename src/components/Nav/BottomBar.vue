<template>
    <div class="bottom-bar">
        <div>      
            <b-icon
                pack="fas"
                icon="search"
                size="is-medium"
                type="is-white">
            </b-icon>
        </div>        
        <div>      
            <b-icon
                pack="fas"
                icon="filter"
                size="is-medium"
                type="is-white">
            </b-icon>
        </div>
    </div>
</template>

<script>
export default {
  name: "BottomBar",
//   methods: {
//     // toggleMenu() {
//     //   const navbarMenu = document.getElementById("nav-barMenu");
//     //   navbarMenu.classList.toggle("active");
//     // }
//   },
//   data() {
//     // return {
//     //   showDropdownItems: false
//     // }
//   }
};
</script>

<style lang="scss" scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 500;
}
</style>