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
  { path: '/', component: HelloWorld, name: 'Home', meta: { backgroundColor: 'var(--primary-background-color)', primaryFontColor: 'var(--primary-text-color)' } },
  { path: '/home', component: HelloWorld, name: 'Home3', meta: { backgroundColor: 'var(--primary-background-color)', primaryFontColor: 'var(--primary-text-color)' } },
  { path: '/projects', component: Projects, name: 'Projects', meta: { backgroundColor: 'var(--quaternary-background-color)', primaryFontColor: 'var(--quaternary-text-color)' } },
  { path: '/about', component: About, name: 'About', meta: { backgroundColor: 'var(--secondary-background-color)', primaryFontColor: 'var(--secondary-text-color)' } },
  { path: '/animation', component: Animation, name: 'Animation', meta: { backgroundColor: 'var(--primary-background-color)', primaryFontColor: 'var(--primary-text-color)' } },
  { path: '/travels', component: Travels, name: 'Travels', meta: { backgroundColor: 'var(--tertiary-background-color)', primaryFontColor: 'var(--tertiary-text-color)' } },
  { path: '/*', component: UhOh, name: 'Home2', meta: { backgroundColor: 'var(--primary-background-color)', primaryFontColor: 'var(--primary-text-color)' } }
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

router.beforeEach((to, from, next) => {
  document.documentElement.style.setProperty('--background-color', to.meta.backgroundColor);
  document.documentElement.style.setProperty('--primary-font-color', to.meta.primaryFontColor);

  next();
});

app.use(router);
app.mount('#app');

