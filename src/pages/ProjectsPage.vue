<template>
  <div class="min-h-screen pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Page Header -->
      <div class="text-center mb-16" v-reveal>
        <h1 class="text-4xl lg:text-5xl font-bold heading-gradient mb-4">
          Projects
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Selected work and experiments showcasing my development skills
        </p>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-reveal>
          <ProjectCard
            title="E-commerce Website (2020 – Present)"
            description="Full-stack Laravel + Vue 3 project for Lyndakade."
            :image="base + 'images/projects/ecommerce.svg'"
            github=""
            demo=""
          />
        </div>
        
        <div v-reveal>
          <ProjectCard
            title="Flutter Apps (2024)"
            description="Developed mobile & desktop applications using Flutter."
            :image="base + 'images/projects/flutter-apps.svg'"
            github=""
            demo=""
          />
        </div>
        
        <div v-reveal>
          <ProjectCard
            title="Python Automation Bot (2025)"
            description="Built a scalable bot system to automate Plato game platform accounts."
            :image="base + 'images/projects/python-bot.svg'"
            github=""
            demo=""
          />
        </div>
        
        <div v-reveal>
          <ProjectCard
            title="Game Development (2018–2020)"
            description="Developed games for Legend Company."
            :image="base + 'images/projects/game-dev.svg'"
            github=""
            demo=""
          />
        </div>
        
        <div v-reveal>
          <ProjectCard
            title="Academic Game Project (2018)"
            description="Driving-based game with realistic maps of Torshiz city."
            :image="base + 'images/projects/academic-game.svg'"
            github=""
            demo=""
          />
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="text-center mt-16" v-reveal>
        <div class="card p-8 max-w-2xl mx-auto">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            Interested in working together?
          </h2>
          <p class="text-gray-600 mb-6">
            I'm always open to discussing new projects and opportunities. Let's create something amazing together!
          </p>
          <RouterLink to="/contact" class="btn btn-primary">
            Get In Touch
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'
const base = import.meta.env.BASE_URL
</script>
