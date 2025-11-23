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
            description="Built an automation framework for mobile game interactions using Appium and Android emulators, supporting 50+ game types with modular strategy-based architecture. Implemented multi-instance parallel processing and resource management system."
            :image="base + 'images/projects/python-bot.svg'"
            github=""
            demo=""
          />
        </div>
        
        <div v-reveal>
          <ProjectCard
            title="Telegram Automation Bot for Hamster Kombat & Web3 Games"
            description="Developed automation bot for Hamster Kombat, TapSwap, Notcoin, Gemz, Dotcoin, and W-coin. Implemented using Python, Telegram Bot API + Web3/TON blockchain integrations with multi-account management and concurrency."
            :image="base + 'images/projects/python-bot.svg'"
            github=""
            demo=""
          />
        </div>
        
        <div v-reveal>
          <ProjectCard
            title="Lyndakade Mobile & Desktop App"
            description="Delivered a production-ready Flutter app with custom video player, background downloads, end-to-end payments (Zarinpal/Zibal), search, notifications, and in-app chat. Organized code into reusable widgets, screens, controllers, and services."
            :image="base + 'images/projects/flutter-apps.svg'"
            github=""
            demo=""
          />
        </div>
        
        <div v-reveal>
          <ProjectCard
            title="Lyndakade E-learning Platform"
            description="Built a full-stack e-learning app using Laravel + Inertia.js Vue 3. Implemented course management, chapters, videos, comments, user progress tracking, Vue 3 SSR, fast faceted search using Meilisearch, authentication, and payment flows."
            :image="base + 'images/projects/ecommerce.svg'"
            github=""
            demo=""
          />
        </div>
        
        <div v-reveal>
          <ProjectCard
            title="3D Car Racing Game for Educational Research"
            description="Developed 3D car racing game for desktop platforms using Unity. Worked as a Game Developer on a research-led game under Ms. Dolkhani, contributing to an IEEE paper (ID 8712031)."
            :image="base + 'images/projects/game-dev.svg'"
            github=""
            demo=""
          />
        </div>
        
        <div v-reveal>
          <ProjectCard
            title="Oxford Learning - Android Vocabulary App"
            description="Built an Android application to browse and study IT vocabulary. Integrated a collaboratively compiled lexicon based on the Oxford English for Information Technology textbook."
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
