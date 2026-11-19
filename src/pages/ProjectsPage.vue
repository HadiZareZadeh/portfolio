<template>
  <div class="min-h-screen pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Page Header -->
      <div class="text-center mb-16" v-reveal>
        <h1 class="text-4xl lg:text-5xl font-bold heading-gradient mb-4">
          Projects
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Web platforms, automation tools and experiments I have built, from e-learning sites to Android automation and local AI.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="p in projects" :key="p.title" v-reveal>
          <ProjectCard
            :title="p.title"
            :year="p.year"
            :description="p.description"
            :points="p.points"
            :tags="p.tags"
            :image="base + p.image"
            :github="p.github || ''"
            :demo="p.demo || ''"
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
            I'm looking for backend, automation or Python roles, ideally with some AI work in them. Let's talk.
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

const projects = [
  {
    title: 'Academy ZareZadeh',
    year: '',
    description: 'An educational platform with three roles (student, instructor, admin) and Persian right-to-left support.',
    points: [
      'Authentication and authorization with Laravel Sanctum.',
      'Payments through ZarinPal and Zibal, priced in Toman.',
      'Real-time features with Laravel Reverb and search with Meilisearch.',
      'Runs on Ubuntu 24 without Docker, deployed with GitLab Runner.'
    ],
    tags: ['Laravel 12', 'PHP 8.2', 'Vue', 'Inertia.js', 'TypeScript', 'Tailwind 4', 'PostgreSQL', 'Redis'],
    image: 'images/projects/ecommerce.svg',
    demo: 'https://zarezadeh.academy'
  },
  {
    title: 'Lyndakade',
    year: '2020 – 2023',
    description: 'An online learning platform with server-side rendering, user accounts and online payments, in Persian and English.',
    points: [
      'Catalog of about 10,000 courses, 650 learning paths, 2,277 authors and 1,527 subjects, searched with Meilisearch.',
      'Subscription access with a separate download-credit balance, signed download links and embedded subtitles.',
      'Optimized database queries and backend code to improve page load times.',
      'Wrote the Flutter mobile app (v2.1.7), which handles encrypted video.'
    ],
    tags: ['Laravel 9', 'Vue 3', 'Inertia.js', 'MySQL', 'Meilisearch', 'Flutter'],
    image: 'images/projects/flutter-apps.svg',
    demo: 'https://lyndakade.ir'
  },
  {
    title: 'Plato Mobile Game Automation',
    year: '2025',
    description: 'A Python system that automates Android mobile games on emulators, built around a modular, strategy-based design.',
    points: [
      'Runs several emulator instances in parallel and starts and stops Appium servers on its own.',
      'OpenCV and PIL image matching finds UI elements and recognizes the game state.'
    ],
    tags: ['Python', 'Appium', 'UiAutomator2', 'ADB', 'OpenCV', 'PIL'],
    image: 'images/projects/python-bot.svg'
  },
  {
    title: 'Telegram Automation Bot',
    year: '2024',
    description: 'A bot for Hamster Kombat and other Web3 tap-to-earn games that runs repetitive tasks across multiple accounts.',
    points: [
      'Keeps long sessions running reliably.',
      'Added concurrency, monitoring and blockchain integrations to keep it stable.'
    ],
    tags: ['Python', 'Telegram API', 'TON'],
    image: 'images/projects/python-bot.svg'
  },
  {
    title: 'Open Huddle',
    year: '',
    description: 'A self-hosted video-call app in the style of Google Meet, with mesh WebRTC for up to 8 participants.',
    points: [
      'React + Express signaling over Socket.IO, with a self-hosted coturn TURN server.',
      'Host approval lobby, in-meeting chat and client-side background blur with TensorFlow.js.'
    ],
    tags: ['React', 'Express', 'WebRTC', 'Socket.IO', 'coturn', 'TensorFlow.js'],
    image: 'images/projects/video-call.svg',
    github: 'https://github.com/HadiZareZadeh/open-huddle'
  },
  {
    title: 'Local AI Setup',
    year: 'Ongoing',
    description: 'Personal experiments with running open language models on my own machine.',
    points: [
      'Serve open models through local APIs and connect them to VS Code.',
      'Tried multimodal models and fully offline setups.'
    ],
    tags: ['Ollama', 'llama.cpp', 'Qwen3-Coder', 'Gemma'],
    image: 'images/projects/local-ai.svg'
  },
  {
    title: '3D Car Racing Game',
    year: '2017 – 2018',
    description: 'A driving simulation built for educational research at my university.',
    points: [
      'Wrote core gameplay modules and ran user testing.',
      'The game was used in an IEEE-published study (Paper ID 8712031).'
    ],
    tags: ['Unity', 'C#'],
    image: 'images/projects/game-dev.svg'
  }
]
</script>
