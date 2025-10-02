import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import('../pages/HomePage.vue');
const About = () => import('../pages/AboutPage.vue');
const Projects = () => import('../pages/ProjectsPage.vue');
const Contact = () => import('../pages/ContactPage.vue');

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/contact', name: 'contact', component: Contact },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, top: 80, behavior: 'smooth' };
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;


