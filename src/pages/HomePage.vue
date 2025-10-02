<template>
  <section class="relative isolate">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div class="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div :class="[ 'transition-all duration-700 ease-out', isShown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2' ]">
          <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight heading-gradient">
            Hadi ZareZadeh
          </h1>
          <p class="mt-2 text-lg sm:text-xl text-gray-700 font-medium transition-opacity duration-700 ease-out">
            Full-Stack Web Developer
          </p>
          <p class="mt-4 text-gray-600 max-w-prose">
            Highly motivated developer with 4+ years of experience in Laravel, Vue 3, Tailwind, and Python automation.
          </p>
          <div class="mt-6 flex items-center gap-3">
            <RouterLink
              to="/projects#top"
              class="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              View My Work
            </RouterLink>
            <RouterLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50"
            >
              Contact
            </RouterLink>
          </div>
        </div>
        <div class="relative" :class="[ 'transition-all duration-700 ease-out delay-150', isShown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2' ]">
          <div class="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 shadow-inner">
            <img
              class="h-full w-full object-cover"
              alt="Profile"
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';

const isShown = ref(false);
onMounted(() => { requestAnimationFrame(() => { isShown.value = true; }); });
</script>


