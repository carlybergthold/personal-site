import { createApp } from 'vue';
import App from "./App.vue";
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from "./components/HelloWorld.vue";
import Projects from "./components/Projects/Projects.vue";
import About from "./components/About/About.vue";
import Animation from "./components/Projects/Animation.vue";
import Travels from "./components/Travels/Travels.vue";
import UhOh from "./components/UhOh.vue";
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import "./styles/variables.css";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import titleMixin from './mixins/titleMixin';
import 'leaflet/dist/leaflet.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/home', component: HelloWorld },
  { path: '/projects', component: Projects },
  { path: '/about', component: About },
  { path: '/animation', component: Animation },
  { path: '/travels', component: Travels },
  { path: '/*', component: UhOh }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.mixin(titleMixin);
app.use(Buefy);

library.add(fas, fab);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.mount('#app');
