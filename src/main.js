import Vue from 'vue';
import App from "./App.vue";
import VueRouter from 'vue-router';
import HelloWorld from "./components/HelloWorld.vue";
import Projects from "./components/Projects/Projects.vue";
import About from "./components/About/About.vue";
import Animation from "./components/Projects/Animation.vue";
import Travels from "./components/Travels.vue";
import Buefy from 'buefy';
import "./styles/buefy.scss";
import "./styles/variables.css";
import {MediaQueries, CommonBands} from 'vue-media-queries';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import titleMixin from './mixins/titleMixin';

Vue.mixin(titleMixin);
Vue.use(VueRouter);
Vue.use(Buefy);
const mediaQueries = new MediaQueries({
  bands: CommonBands.Bulma
});

Vue.use(mediaQueries);

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/home', component: HelloWorld },
  { path: '/projects', component: Projects },
  { path: '/about', component: About },
  { path: '/animation', component: Animation },
  { path: '/travels', component: Travels }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  el: '#app',
  mediaQueries: mediaQueries,
  mixins: [CommonBands.Bulma.mixin],
  router,
  render: h => h(App)
})
