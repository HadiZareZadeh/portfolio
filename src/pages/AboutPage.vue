<template>
  <div class="min-h-screen pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Page Header -->
      <div class="text-center mb-16" v-reveal>
        <h1 class="text-4xl lg:text-5xl font-bold heading-gradient mb-4">
          About Me
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Get to know more about my background, skills, and experience
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Left Column -->
        <div class="space-y-8">
          <!-- Avatar Card -->
          <div v-reveal class="flex justify-center">
            <div 
              ref="avatarCard"
              class="relative w-64 h-64 rounded-2xl overflow-hidden shadow-soft cursor-pointer"
              @mousemove="handleMouseMove"
              @mouseleave="resetTilt"
            >
              <img 
                :src="base + 'images/about-avatar.svg'" 
                alt="Hadi ZareZadeh professional photo"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          <!-- Quick Facts Card -->
          <div v-reveal class="card p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <span class="text-gray-500">📍</span>
                <span class="text-gray-700">Kashmar, Iran</span>
              </div>
              <div class="flex items-center space-x-3">
                <span class="text-gray-500">📧</span>
                <a href="mailto:HadiZareZadeh00@gmail.com" class="text-brand-600 hover:text-brand-700">
                  HadiZareZadeh00@gmail.com
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <span class="text-gray-500">📱</span>
                <a href="tel:+989123456789" class="text-brand-600 hover:text-brand-700">
                  +98 912 345 6789
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <span class="text-gray-500">💼</span>
                <a href="https://github.com/HadiZareZadeh" target="_blank" rel="noopener noreferrer" class="text-brand-600 hover:text-brand-700">
                  GitHub
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <span class="text-gray-500">🔗</span>
                <a href="https://www.linkedin.com/in/hadi-zare-zadeh-686113182" target="_blank" rel="noopener noreferrer" class="text-brand-600 hover:text-brand-700">
                  LinkedIn
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <span class="text-gray-500">🗣️</span>
                <span class="text-gray-700">Persian, English</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Column -->
        <div class="space-y-8">
          <!-- About Me Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">About Me</h2>
            <p class="text-gray-700 leading-relaxed">
              I am a passionate Full-Stack Web Developer with a B.Sc. in Computer Science (Kashmar Higher Education Institute, 2020). Began programming at age 9, now specializing in modern frameworks (Laravel, Vue 3, Tailwind CSS) and Python automation. Experienced in building web applications, data mining, and automating workflows. Adaptable, analytical, and always seeking opportunities for growth.
            </p>
          </div>
          
          <!-- Skills Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Skills</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h3 class="font-medium text-gray-900 mb-3">Programming & Web Dev</h3>
                <div class="flex flex-wrap gap-2">
                  <SkillBadge>Python (Advanced)</SkillBadge>
                  <SkillBadge>PHP</SkillBadge>
                  <SkillBadge>Laravel</SkillBadge>
                  <SkillBadge>Vue 3</SkillBadge>
                  <SkillBadge>Tailwind</SkillBadge>
                  <SkillBadge>Java</SkillBadge>
                </div>
              </div>
              
              <div>
                <h3 class="font-medium text-gray-900 mb-3">Data & Automation</h3>
                <div class="flex flex-wrap gap-2">
                  <SkillBadge>Python Data Mining</SkillBadge>
                  <SkillBadge>Workflow Automation</SkillBadge>
                  <SkillBadge>Basic AI/ML</SkillBadge>
                </div>
              </div>
              
              <div>
                <h3 class="font-medium text-gray-900 mb-3">Databases</h3>
                <div class="flex flex-wrap gap-2">
                  <SkillBadge>MySQL (Advanced)</SkillBadge>
                  <SkillBadge>MongoDB (Basic)</SkillBadge>
                </div>
              </div>
              
              <div>
                <h3 class="font-medium text-gray-900 mb-3">Other</h3>
                <div class="flex flex-wrap gap-2">
                  <SkillBadge>Git/GitHub/GitLab</SkillBadge>
                  <SkillBadge>Flutter (Basic)</SkillBadge>
                  <SkillBadge>Unity (Basic)</SkillBadge>
                  <SkillBadge>Google Cloud (Basic)</SkillBadge>
                  <SkillBadge>Linux & Windows</SkillBadge>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Experience Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Experience</h2>
            <div class="space-y-4">
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Full-stack Developer</h3>
                <p class="text-gray-600">@ Lyndakade (2020 – Present)</p>
              </div>
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Mobile/Desktop App Dev</h3>
                <p class="text-gray-600">@ Lyndakade (2024)</p>
              </div>
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Python Bot Developer</h3>
                <p class="text-gray-600">(2025)</p>
              </div>
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Game Developer</h3>
                <p class="text-gray-600">@ Legend Company (2018–2020)</p>
              </div>
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Teaching Assistant</h3>
                <p class="text-gray-600">@ Kashmar Higher Education Institute (2017–2020)</p>
              </div>
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Head of Education</h3>
                <p class="text-gray-600">@ Scientific Association (2017–2020)</p>
              </div>
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Secretary of Director</h3>
                <p class="text-gray-600">@ Cargo Clearance Co. (2015)</p>
              </div>
            </div>
          </div>
          
          <!-- Education Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Education</h2>
            <div class="space-y-3">
              <div>
                <h3 class="font-medium text-gray-900">B.Sc. Computer Science</h3>
                <p class="text-gray-600">Kashmar Higher Education Institute (2016–2020)</p>
              </div>
              <div>
                <h3 class="font-medium text-gray-900">High School Diploma in Physics & Mathematics</h3>
                <p class="text-gray-600">Dr. Shariati School (2014)</p>
              </div>
            </div>
          </div>
          
          <!-- Presentations Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Presentations</h2>
            <div class="space-y-2">
              <div class="text-gray-700">• Thesis: Lyndakade (2020)</div>
              <div class="text-gray-700">• Evolutionary Algorithms (2019)</div>
              <div class="text-gray-700">• Genetic Algorithm (2019)</div>
            </div>
          </div>
          
          <!-- Sports & Achievements Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Sports & Achievements</h2>
            <div class="space-y-2">
              <div class="text-gray-700">• Karate-do: 2nd Dan Black Belt, 9 gold medals (2005–2016)</div>
              <div class="text-gray-700">• Self-Defense Training (2019–2020)</div>
            </div>
          </div>
          
          <!-- Hobbies & Interests Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Hobbies & Interests</h2>
            <div class="flex flex-wrap gap-2">
              <SkillBadge>Camping & Outdoor Adventures</SkillBadge>
              <SkillBadge>Socializing (Couchsurfing)</SkillBadge>
              <SkillBadge>Music & Movies</SkillBadge>
              <SkillBadge>Algorithm Challenges</SkillBadge>
              <SkillBadge>Short Fiction</SkillBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SkillBadge from '../components/SkillBadge.vue'

const avatarCard = ref(null)
const base = import.meta.env.BASE_URL

// uses local /images/about-avatar.jpg

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
</script>
