<template>
  <section id="top" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
    <div class="flex items-end justify-between gap-4">
      <div>
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">Projects</h2>
        <p class="mt-2 text-gray-600">Selected work and experiments.</p>
      </div>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :github="project.github"
        :demo="project.demo"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';

const projects = ref([
  {
    title: 'Portfolio Website',
    description: 'This site — Vue 3, Vite, Tailwind, and clean UI patterns.',
    image: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=1200&q=80&auto=format&fit=crop',
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
  {
    title: 'Automation Toolkit',
    description: 'Scripts and services for workflow automation with Python.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&q=80&auto=format&fit=crop',
    github: 'https://github.com/',
    demo: '',
  },
  {
    title: 'Dashboard UI',
    description: 'A modern admin dashboard built with Vue and Tailwind.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80&auto=format&fit=crop',
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
]);
</script>


