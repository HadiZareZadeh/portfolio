<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-animated-gradient min-h-screen flex items-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column - Text Content -->
          <div class="space-y-8">
            <div v-reveal>
              <h1 class="text-5xl lg:text-6xl font-bold heading-gradient animate-fade-in-up">
                Hadi ZareZadeh
              </h1>
              <p class="text-2xl lg:text-3xl text-gray-600 mt-4">
                Computer Science Graduate & Aspiring ML/AI Researcher
              </p>
            </div>
            
            <div v-reveal class="space-y-6">
              <p class="text-lg text-gray-700 leading-relaxed">
                Computer Science graduate with strong foundations in algorithms, optimization, and software engineering, now transitioning toward Machine Learning and AI research. Passionate about deep learning, computer vision, NLP, and reinforcement learning, with a growing portfolio of Python-based projects involving automation, data processing, and algorithmic problem-solving. Experienced with LLM-assisted development workflows (ChatGPT, Cursor) for prototyping, debugging, and accelerating project delivery since 2023.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4">
                <RouterLink 
                  to="/about" 
                  class="btn btn-primary animate-float"
                >
                  Get to Know Me
                </RouterLink>
                <RouterLink 
                  to="/story" 
                  class="btn btn-outline"
                >
                  My Story
                </RouterLink>
                <RouterLink 
                  to="/contact" 
                  class="btn btn-outline"
                >
                  Contact
                </RouterLink>
              </div>
            </div>
          </div>
          
          <!-- Right Column - Avatar -->
          <div v-reveal class="flex justify-center lg:justify-end">
            <div 
              ref="avatarCard"
              class="relative w-80 h-80 rounded-2xl overflow-hidden shadow-soft cursor-pointer"
              @mousemove="handleMouseMove"
              @mouseleave="resetTilt"
            >
              <img 
                :src="base + 'images/avatar.png'" 
                alt="Hadi ZareZadeh - Computer Science Graduate transitioning toward ML/AI Research"
                class="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const avatarCard = ref(null)
const isShown = ref(false)

const base = import.meta.env.BASE_URL

// uses local /images/avatar.png

const handleMouseMove = (e) => {
  if (!avatarCard.value) return
  
  const rect = avatarCard.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  const mouseX = e.clientX - centerX
  const mouseY = e.clientY - centerY
  
  const tiltX = (mouseY / rect.height) * 20
  const tiltY = (mouseX / rect.width) * -20
  
  avatarCard.value.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
}

const resetTilt = () => {
  if (avatarCard.value) {
    avatarCard.value.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
  }
}

onMounted(() => {
  // Trigger reveal animation
  setTimeout(() => {
    isShown.value = true
  }, 100)
})
</script>
