<template>
  <div class="min-h-screen flex flex-col">
    <SiteNavbar />
    <main class="flex-1">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
  
  <!-- Scroll anchor for Home CTA -->
  <div id="projects-anchor" class="sr-only"></div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SiteNavbar from './components/SiteNavbar.vue';
import SiteFooter from './components/SiteFooter.vue';
</script>


