<template>
  <TopNav />
  
  <section>
    <div class="hello-world">
      <div class="headliner">carly</div>
      <div class="paragraphy">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt 
        in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
        <br></br>
        <br></br>
        Temporibus autem quibusdam et aut officiis debitis
          aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum 
          hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
          repella</div>
      <hr>
      <div class="boxes">
        <div v-for="box in boxes" :key="box" class="carly-box">
          <div class="carly-title">{{ box.title }}</div>
          <div class="desc">{{ box.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TopNav from '../components/Nav/TopNav.vue';

export default {
  name: 'HelloWorld',
  components: {
    TopNav
  },
  title: 'Carly Bergthold - Home',
  props: {
    msg: String
  },
  data() {
    return {
      boxes: [
        {title: 'A', desc: 'This is box A'},
        {title: 'B', desc: 'This is box B'},
        {title: 'C', desc: 'This is box C'},
        {title: 'D', desc: 'This is box D'}
      ],
    }
  }
}
</script>

<style scoped>
.foo {
    background: none;
    border: 0;
    cursor: pointer;
    height: 50px;
    overflow: hidden;
    opacity: 0;
    padding: 0;
    position: absolute;
    right: 10px;
    top: 12px;
    transform: translateY(66px);
    width: 50px;
    visibility: hidden;
    z-index: 15;
}
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}
.foo .box {
    bottom: 0;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    transition-property: top, right, bottom, left;
    transition-duration: .25s;
    transition-timing-function: 
cubic-bezier(.19, 1, .22, 1);
    background-color: #2b2c33;
    display: block;
    height: 8px;
    width: 8px;
}






.hello-world {
  height: 100vh;
  width: 100%;
  background-color: hsl(74.44deg 50.57% 51.31%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15% 10% 10% 10%;
}
.headliner {
  font-size: 48px;
  font-weight: bold;
}
.paragraphy {
  font-size: 16px;
}
hr {
  background: black;
  width: 100%;
}
.boxes {
  height: 200px;
  width: 100%;
  display: flex;
  gap: 10px;
}
.carly-box {
  flex: 1;
  border: 4px solid rgb(50, 50, 50);
  display: flex;
  flex-flow: column;
  align-items: center;
  font-weight: 700;
}
.carly-title {
  font-size: 6rem;
}



.top-menu {
  height: 60px;
  width: 100%;
  background-color: rgb(50, 50, 50);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
  position: absolute;
}
.logo {
  font-size: 24px;
  font-weight: bold;
}
.menu-button {
  font-size: 18px;
  cursor: pointer;
}
</style>