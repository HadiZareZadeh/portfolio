<template>
  <section class="relative isolate bg-animated-gradient">
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="absolute left-1/2 top-[-8rem] -translate-x-1/2 h-[24rem] w-[36rem] rounded-full bg-gradient-to-r from-brand-200/60 via-brand-300/40 to-transparent blur-3xl"></div>
    </div>
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div class="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div :class="[ 'transition-all duration-700 ease-out', isShown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2' ]">
          <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight heading-gradient animate-fade-in-up">
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
              class="btn-primary animate-float"
            >
              View My Work
            </RouterLink>
            <RouterLink
              to="/contact"
              class="btn-outline"
            >
              Contact
            </RouterLink>
          </div>
        </div>
        <div class="relative" :class="[ 'transition-all duration-700 ease-out delay-150', isShown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2' ]">
          <div class="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 shadow-inner will-change-transform" @mousemove="onTilt" @mouseleave="resetTilt" :style="tiltStyle">
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
import { ref, onMounted, computed } from 'vue';

const isShown = ref(false);
onMounted(() => { requestAnimationFrame(() => { isShown.value = true; }); });

// Simple hover tilt for the avatar card
const tiltX = ref(0);
const tiltY = ref(0);
const onTilt = (e) => {
  const target = e.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const percentX = (x / rect.width) - 0.5;
  const percentY = (y / rect.height) - 0.5;
  tiltX.value = percentY * -8;
  tiltY.value = percentX * 8;
};
const resetTilt = () => { tiltX.value = 0; tiltY.value = 0; };
const tiltStyle = computed(() => ({
  transform: `perspective(800px) rotateX(${tiltX.value}deg) rotateY(${tiltY.value}deg)`,
  transition: 'transform 200ms ease-out',
}));
</script>


