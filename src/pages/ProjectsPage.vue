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
        v-reveal
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';

const projects = ref([
  {
    title: 'E-commerce Website (2020 – Present)',
    description: 'Full-stack Laravel + Vue 3 project for Lyndakade.',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=1200&q=80&auto=format&fit=crop',
    github: '',
    demo: '',
  },
  {
    title: 'Flutter Apps (2024)',
    description: 'Developed mobile & desktop applications using Flutter.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop',
    github: '',
    demo: '',
  },
  {
    title: 'Python Automation Bot (2025)',
    description: 'Built a scalable bot system to automate Plato game platform accounts.',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&q=80&auto=format&fit=crop',
    github: '',
    demo: '',
  },
  {
    title: 'Game Development (2018–2020)',
    description: 'Developed games for Legend Company.',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80&auto=format&fit=crop',
    github: '',
    demo: '',
  },
  {
    title: 'Academic Game Project (2018)',
    description: 'Driving-based game with realistic maps of Torshiz city.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80&auto=format&fit=crop',
    github: '',
    demo: '',
  },
]);
</script>


