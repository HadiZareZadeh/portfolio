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
                Computer Science Graduate & Aspiring Data Science Master's Student
              </p>
            </div>
            
            <div v-reveal class="space-y-6">
              <p class="text-lg text-gray-700 leading-relaxed">
                Recent computer science graduate building a strong foundation in data science through coursework projects, collaborative research labs, and mentorship. I enjoy using Python to explore datasets, prototype models, and support professors and research groups tackling real-world questions.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4">
                <RouterLink 
                  to="/projects" 
                  class="btn btn-primary animate-float"
                >
                  View My Work
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
                :src="base + 'images/avatar.svg'" 
                alt="Hadi ZareZadeh - Computer Science Graduate focused on Data Science"
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

// uses local /images/avatar.svg

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
