<template>
  <div class="min-h-screen pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Page Header -->
      <div class="text-center mb-16" v-reveal>
        <h1 class="text-4xl lg:text-5xl font-bold heading-gradient mb-4">
          Projects
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          A collection of projects showcasing my work in automation, mobile development, full-stack applications, and game development.
        </p>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div v-reveal>
          <ProjectCard
            title="Plato Mobile Game Automation System"
            description="Built a scalable automation system for 50+ mobile game types using modular strategy-based design. Added multi-instance parallel processing and automatic Appium server lifecycle management. Integrated OpenCV/PIL for UI element detection and game state recognition."
            :image="base + 'images/projects/python-bot.svg'"
            github=""
            demo=""
          />
        </div>
        
        <div v-reveal>
          <ProjectCard
            title="Telegram Automation Bot for Hamster Kombat & Web3 Games"
            description="Created a bot to automate tap-to-earn tasks, multi-account workflows, and long-running sessions. Implemented concurrency, monitoring, and blockchain integrations for stable performance."
            :image="base + 'images/projects/python-bot.svg'"
            github=""
            demo=""
          />
        </div>
        
        <div v-reveal>
          <ProjectCard
            title="Full-Stack E-Learning Platform – Lyndakade"
            description="Built an e-learning system with SSR, optimized DB queries, and integrated authentication and payments. Implemented search with Meilisearch and improved page performance via backend optimizations."
            :image="base + 'images/projects/ecommerce.svg'"
            github=""
            demo=""
          />
        </div>
        
        <div v-reveal>
          <ProjectCard
            title="3D Car Racing Game for Educational Research"
            description="Developed core gameplay modules for a research-based simulation game. Contributed to an IEEE-published study through feature implementation and user testing."
            :image="base + 'images/projects/game-dev.svg'"
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
            Motivated by long-term research-driven challenges and seeking opportunities to develop advanced AI systems while contributing to innovative and impactful projects. Let's connect!
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
