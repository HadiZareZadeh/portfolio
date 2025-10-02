<template>
  <header :class="[
      'sticky top-0 z-50 backdrop-blur transition-colors duration-300',
      isScrolled ? 'bg-white/95 border-b border-gray-200 shadow-sm' : 'bg-transparent'
    ]">
    <nav class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <RouterLink to="/" class="flex items-center gap-2 font-semibold tracking-tight">
          <span class="text-gray-900">HZ</span>
          <span class="hidden sm:inline text-gray-500">Portfolio</span>
        </RouterLink>

        <button
          class="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          @click="isOpen = !isOpen"
          aria-label="Toggle menu"
        >
          <component :is="isOpen ? Bars3BottomRightIcon : Bars3Icon" class="h-6 w-6" />
        </button>

        <ul class="hidden sm:flex items-center gap-6 text-sm">
          <li><RouterLink class="nav-link" to="/" exact-active-class="active">Home</RouterLink></li>
          <li><RouterLink class="nav-link" to="/about" exact-active-class="active">About</RouterLink></li>
          <li><RouterLink class="nav-link" to="/projects" exact-active-class="active">Projects</RouterLink></li>
          <li><RouterLink class="nav-link" to="/contact" exact-active-class="active">Contact</RouterLink></li>
        </ul>
      </div>
    </nav>

    <div v-if="isOpen" class="sm:hidden border-t border-gray-200">
      <ul class="px-4 py-3 space-y-2 text-sm">
        <li><RouterLink class="mobile-link" to="/" exact-active-class="active" @click="isOpen=false">Home</RouterLink></li>
        <li><RouterLink class="mobile-link" to="/about" exact-active-class="active" @click="isOpen=false">About</RouterLink></li>
        <li><RouterLink class="mobile-link" to="/projects" exact-active-class="active" @click="isOpen=false">Projects</RouterLink></li>
        <li><RouterLink class="mobile-link" to="/contact" exact-active-class="active" @click="isOpen=false">Contact</RouterLink></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink } from 'vue-router';
import { Bars3Icon, Bars3BottomRightIcon } from '@heroicons/vue/24/outline';

const isOpen = ref(false);
const isScrolled = ref(false);

function onScroll() {
  isScrolled.value = window.scrollY > 8;
}

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>
.nav-link { @apply text-gray-600 hover:text-gray-900 transition-colors; }
.nav-link.active { @apply text-gray-900 relative; }
.nav-link.active::after { content: ''; @apply absolute left-1/2 -bottom-2 h-0.5 w-6 -translate-x-1/2 bg-gray-900 rounded-full; }
.mobile-link { @apply block py-1 text-gray-700 hover:text-gray-900; }
</style>


