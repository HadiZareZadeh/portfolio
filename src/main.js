import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

const app = createApp(App)

// Global reveal directive for scroll animations
app.directive('reveal', {
  mounted(el, binding) {
    el.classList.add('reveal-init')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: binding.value?.threshold || 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    )
    
    observer.observe(el)
  }
})

app.use(router)
app.mount('#app')
