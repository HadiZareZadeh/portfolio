<template>
  <footer class="border-t border-gray-200 py-6">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
      © {{ year }} Hadi ZareZadeh
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>


