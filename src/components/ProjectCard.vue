<template>
  <div class="card group overflow-hidden">
    <!-- Image Container -->
    <div class="relative aspect-video overflow-hidden">
      <img 
        :src="image" 
        :alt="`${title} project screenshot`"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      
      <!-- Dark overlay on hover -->
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
      
      <!-- Action buttons that slide in on hover -->
      <div class="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div class="flex space-x-2">
          <a 
            v-if="github" 
            :href="github" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn btn-primary text-sm"
          >
            <ArrowTopRightOnSquareIcon class="h-4 w-4 mr-1" />
            Code
          </a>
          <a 
            v-if="demo" 
            :href="demo" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn btn-outline text-sm"
          >
            <PlayCircleIcon class="h-4 w-4 mr-1" />
            Demo
          </a>
        </div>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900 mb-2">
        {{ title }}
      </h3>
      <p class="text-gray-600 leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ArrowTopRightOnSquareIcon, PlayCircleIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: '/images/placeholder.svg'
  },
  github: {
    type: String,
    default: ''
  },
  demo: {
    type: String,
    default: ''
  }
})
</script>
