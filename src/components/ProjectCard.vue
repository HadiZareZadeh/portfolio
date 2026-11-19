<template>
  <div class="card group overflow-hidden flex flex-col h-full">
    <!-- Image -->
    <div class="relative aspect-video overflow-hidden">
      <img
        :src="image || placeholder"
        :alt="`${title} illustration`"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col flex-1">
      <div class="flex items-baseline justify-between gap-3 mb-2">
        <h3 class="text-xl font-semibold text-gray-900">{{ title }}</h3>
        <span v-if="year" class="text-sm text-gray-500 whitespace-nowrap">{{ year }}</span>
      </div>
      <p class="text-gray-600 leading-relaxed mb-4">{{ description }}</p>

      <ul v-if="points.length" class="text-sm text-gray-600 space-y-1 ml-4 list-disc mb-4">
        <li v-for="p in points" :key="p">{{ p }}</li>
      </ul>

      <div v-if="tags.length" class="flex flex-wrap gap-2 mb-4 mt-auto">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-2 py-0.5 rounded-full text-xs font-medium bg-brand-50 text-brand-700 border border-brand-100"
        >{{ tag }}</span>
      </div>

      <!-- Links are always visible (hover-only buttons do not work on phones) -->
      <div v-if="github || demo" class="flex gap-2">
        <a
          v-if="github"
          :href="github"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary text-sm !py-2"
        >
          <ArrowTopRightOnSquareIcon class="h-4 w-4 mr-1" />
          Code
        </a>
        <a
          v-if="demo"
          :href="demo"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline text-sm !py-2"
        >
          <PlayCircleIcon class="h-4 w-4 mr-1" />
          Live site
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowTopRightOnSquareIcon, PlayCircleIcon } from '@heroicons/vue/24/outline'

const placeholder = import.meta.env.BASE_URL + 'images/placeholder.svg'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: '' },
  year: { type: String, default: '' },
  points: { type: Array, default: () => [] },
  tags: { type: Array, default: () => [] },
  github: { type: String, default: '' },
  demo: { type: String, default: '' }
})
</script>
