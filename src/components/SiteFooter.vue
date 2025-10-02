<template>
  <footer class="border-t border-gray-200 py-6 sticky bottom-0 bg-white/80 backdrop-blur">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
      © {{ year }} Hadi ZareZadeh ·
      <a href="https://github.com/HadiZareZadeh" target="_blank" rel="noreferrer" class="hover:text-gray-700">GitHub</a>
      ·
      <a href="https://www.linkedin.com/in/hadi-zare-zadeh-686113182" target="_blank" rel="noreferrer" class="hover:text-gray-700">LinkedIn</a>
    </div>
    <button @click="scrollTop" aria-label="Scroll to top" class="fixed bottom-6 right-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white shadow-soft transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 animate-pulse-glow">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
    </button>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
function scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
</script>


