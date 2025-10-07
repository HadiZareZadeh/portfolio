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
    
    <!-- Scroll anchor for projects page -->
    <div id="projects-anchor" class="sr-only"></div>
  </div>
</template>

<script setup>
import SiteNavbar from './components/SiteNavbar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<style scoped>
.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-enter-active {
  transition: opacity 0.35s ease-out, transform 0.35s ease-out;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.page-leave-active {
  transition: opacity 0.25s ease-in, transform 0.25s ease-in;
}
</style>
