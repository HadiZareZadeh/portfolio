<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 border-b border-gray-200 shadow-sm backdrop-blur-sm' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-2">
          <span class="text-2xl font-bold text-gray-900">HZ</span>
          <span class="text-lg text-gray-600">Portfolio</span>
        </RouterLink>
        
        <!-- Desktop Navigation -->
        <div class="hidden sm:flex items-center space-x-8">
          <RouterLink 
            to="/" 
            class="nav-link"
            exact-active-class="active"
          >
            Home
          </RouterLink>
          <RouterLink 
            to="/about" 
            class="nav-link"
            exact-active-class="active"
          >
            About
          </RouterLink>
          <RouterLink 
            to="/projects" 
            class="nav-link"
            exact-active-class="active"
          >
            Projects
          </RouterLink>
          <RouterLink 
            to="/contact" 
            class="nav-link"
            exact-active-class="active"
          >
            Contact
          </RouterLink>
        </div>
        
        <!-- Mobile menu button -->
        <button
          @click="toggleMobileMenu"
          class="sm:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6" />
          <Bars3BottomRightIcon v-else class="h-6 w-6" />
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div 
        v-show="mobileMenuOpen"
        class="sm:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <RouterLink 
            to="/" 
            class="mobile-link"
            @click="closeMobileMenu"
            exact-active-class="active"
          >
            Home
          </RouterLink>
          <RouterLink 
            to="/about" 
            class="mobile-link"
            @click="closeMobileMenu"
            exact-active-class="active"
          >
            About
          </RouterLink>
          <RouterLink 
            to="/projects" 
            class="mobile-link"
            @click="closeMobileMenu"
            exact-active-class="active"
          >
            Projects
          </RouterLink>
          <RouterLink 
            to="/contact" 
            class="mobile-link"
            @click="closeMobileMenu"
            exact-active-class="active"
          >
            Contact
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Bars3Icon, Bars3BottomRightIcon } from '@heroicons/vue/24/outline'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 8
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-gray-900 transition-colors duration-200 relative;
}

.nav-link.active {
  @apply text-gray-900;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #3f54db;
  border-radius: 1px;
}

.mobile-link {
  @apply block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200;
}

.mobile-link.active {
  @apply text-gray-900 bg-gray-50;
}
</style>
