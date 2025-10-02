<template>
  <article class="card group" v-reveal>
    <div class="relative aspect-video w-full overflow-hidden bg-gray-100">
      <img :src="proxiedImage" :alt="title" class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div class="absolute inset-x-0 bottom-0 p-3 sm:p-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div class="flex items-center gap-2">
          <a
            v-if="github"
            :href="github"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-1 rounded-md bg-white/90 px-3 py-1 text-xs text-gray-900 shadow hover:bg-white"
          >
            <ArrowTopRightOnSquareIcon class="h-4 w-4" /> Code
          </a>
          <a
            v-if="demo"
            :href="demo"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-1 rounded-md bg-white/90 px-3 py-1 text-xs text-gray-900 shadow hover:bg-white"
          >
            <PlayCircleIcon class="h-4 w-4" /> Demo
          </a>
        </div>
      </div>
    </div>
    <div class="p-4 sm:p-5">
      <h3 class="text-base font-semibold text-gray-900">{{ title }}</h3>
      <p class="mt-1 text-sm text-gray-600">{{ description }}</p>
    </div>
  </article>
  
</template>

<script setup>
import { ArrowTopRightOnSquareIcon, PlayCircleIcon } from '@heroicons/vue/24/outline';
import { computed } from 'vue';
import { proxyImageUrl } from '../utils/imageProxy';

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: 'https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?w=1200&q=80&auto=format&fit=crop' },
  github: { type: String, default: '' },
  demo: { type: String, default: '' },
});
const proxiedImage = computed(() => proxyImageUrl(props.image, { width: 1200, quality: 80, auto: 'format' }));
</script>


