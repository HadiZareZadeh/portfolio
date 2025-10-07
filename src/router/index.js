import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('../pages/HomePage.vue')
const AboutPage = () => import('../pages/AboutPage.vue')
const ProjectsPage = () => import('../pages/ProjectsPage.vue')
const ContactPage = () => import('../pages/ContactPage.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: 'smooth'
      }
    } else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  }
})

export default router
