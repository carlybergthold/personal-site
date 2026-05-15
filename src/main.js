import { createApp } from 'vue';
import App from "./App.vue";
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from "./components/HelloWorld.vue";
import Projects from "./components/Projects/Projects.vue";
import Animation from "./components/Projects/Animation.vue";
import Travels from "./components/Travels/Travels.vue";
import Resume from "./components/About/Resume.vue";
import UhOh from "./components/UhOh.vue";
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
  { path: '/', component: HelloWorld, name: 'Home', meta: { backgroundColor: 'var(--tertiary-background-color)', primaryFontColor: 'var(--tertiary-text-color)' } },
  { path: '/home', component: HelloWorld, name: 'Home3', meta: { backgroundColor: 'var(--tertiary-background-color)', primaryFontColor: 'var(--tertiary-text-color)' } },
  { path: '/projects', component: Projects, name: 'Projects', meta: { backgroundColor: 'var(--primary-background-color)', primaryFontColor: 'var(--primary-text-color)' } },
  { path: '/about', redirect: { path: '/home', hash: '#about' } },
  { path: '/animation', component: Animation, name: 'Animation', meta: { backgroundColor: 'var(--primary-background-color)', primaryFontColor: 'var(--primary-text-color)' } },
  { path: '/travels', component: Travels, name: 'Travels', meta: { backgroundColor: 'var(--tertiary-background-color)', primaryFontColor: 'var(--tertiary-text-color)' } },
  { path: '/resume', component: Resume, name: 'Resume', meta: { backgroundColor: 'var(--primary-background-color)', primaryFontColor: 'var(--primary-text-color)' } },
  { path: '/*', component: UhOh, name: 'Home2', meta: { backgroundColor: 'var(--primary-background-color)', primaryFontColor: 'var(--primary-text-color)' } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return { top: 0 };
  }
});

const app = createApp(App);
app.mixin(titleMixin);

library.add(fas, fab);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.mount('#app');

