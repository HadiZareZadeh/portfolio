import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

const app = createApp(App);
// Simple scroll-reveal directive using IntersectionObserver
app.directive('reveal', {
  mounted(el, binding) {
    const threshold = typeof binding.value === 'number' ? binding.value : 0.15;
    el.classList.add('reveal-init');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold });
    observer.observe(el);
  },
});
app.use(router);
app.mount('#app');


