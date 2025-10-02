<template>
  <article class="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
    <div class="aspect-video w-full bg-gray-100">
      <img :src="image" :alt="title" class="h-full w-full object-cover" />
    </div>
    <div class="p-4 sm:p-5">
      <h3 class="text-base font-semibold text-gray-900">{{ title }}</h3>
      <p class="mt-1 text-sm text-gray-600">{{ description }}</p>
      <div class="mt-3 flex flex-wrap gap-2">
        <a
          v-if="github"
          :href="github"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1 text-xs text-gray-700 hover:bg-gray-50"
        >
          <ArrowTopRightOnSquareIcon class="h-4 w-4" /> Code
        </a>
        <a
          v-if="demo"
          :href="demo"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1 text-xs text-gray-700 hover:bg-gray-50"
        >
          <PlayCircleIcon class="h-4 w-4" /> Demo
        </a>
      </div>
    </div>
  </article>
  
</template>

<script setup>
import { ArrowTopRightOnSquareIcon, PlayCircleIcon } from '@heroicons/vue/24/outline';

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: 'https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?w=1200&q=80&auto=format&fit=crop' },
  github: { type: String, default: '' },
  demo: { type: String, default: '' },
});
</script>


