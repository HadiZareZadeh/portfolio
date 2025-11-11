<template>
  <div class="min-h-screen pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Page Header -->
      <div class="text-center mb-16" v-reveal>
        <h1 class="text-4xl lg:text-5xl font-bold heading-gradient mb-4">
          Projects
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Coursework, internships, and self-directed projects that prepared me for graduate study in data science.
        </p>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div v-reveal>
          <ProjectCard
            title="Automation Platform for Plato"
            description="Scalable Android emulator automation with logging, monitoring, and recovery workflows."
            :image="base + 'images/projects/python-bot.svg'"
            github=""
            demo=""
          />
        </div>
        
        <div v-reveal>
          <ProjectCard
            title="Lyndakade E-commerce Platform"
            description="Laravel + Vue 3 stack powering marketplace operations with analytics-ready data flows."
            :image="base + 'images/projects/ecommerce.svg'"
            github=""
            demo=""
          />
        </div>
        
        <div v-reveal>
          <ProjectCard
            title="Evolutionary Algorithm Research"
            description="Undergraduate research projects implementing evolutionary and genetic optimization techniques with comparative analysis."
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
            Interested in collaborating?
          </h2>
          <p class="text-gray-600 mb-6">
            I'm eager to connect with research labs, graduate programs, and mentors who explore data-driven questions. Let's learn and build together!
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
