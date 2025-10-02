<template>
  <div class="min-h-screen flex flex-col">
    <SiteNavbar />
    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    <SiteFooter />
  </div>
  
  <!-- Scroll anchor for Home CTA -->
  <div id="projects-anchor" class="sr-only"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import SiteNavbar from './components/SiteNavbar.vue';
import SiteFooter from './components/SiteFooter.vue';

onMounted(() => {
  // Add a global smooth scroll-to-top on route change if needed
  // Router scrollBehavior already handles smooth scrolling to hash and top
});
</script>

<style>
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.page-enter-active {
  transition: opacity .35s ease-out, transform .35s ease-out;
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
.page-leave-active {
  transition: opacity .25s ease-in, transform .25s ease-in;
}
</style>


