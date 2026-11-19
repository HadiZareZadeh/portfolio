<template>
  <div class="min-h-screen pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Page Header -->
      <div class="text-center mb-16" v-reveal>
        <h1 class="text-4xl lg:text-5xl font-bold heading-gradient mb-4">
          About Me
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          My background, skills and what I have built
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
                :src="base + 'images/avatar.png'" 
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
                <span class="text-gray-700">Bandar Lengeh, Iran</span>
              </div>
              <div class="flex items-center space-x-3">
                <span class="text-gray-500">🎓</span>
                <span class="text-gray-700">B.Sc. Computer Science, Kashmar Higher Education Institute (2016-2020)</span>
              </div>
              <div class="flex items-center space-x-3">
                <span class="text-gray-500">📧</span>
                <a href="mailto:HadiZareZadeh00@gmail.com" class="text-brand-600 hover:text-brand-700">
                  HadiZareZadeh00@gmail.com
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <span class="text-gray-500">📄</span>
                <a :href="base + 'Hadi_ZareZadeh_Resume.pdf'" target="_blank" rel="noopener noreferrer" class="text-brand-600 hover:text-brand-700">
                  Download resume (PDF)
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
                <a href="https://www.linkedin.com/in/hadi-zare-zadeh" target="_blank" rel="noopener noreferrer" class="text-brand-600 hover:text-brand-700">
                  LinkedIn
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <span class="text-gray-500">🗣️</span>
                <span class="text-gray-700">Persian (native), English (B2, self-assessed), Spanish (about A2)</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Column -->
        <div class="space-y-8">
          <!-- About Me Section (SUMMARY) -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Summary</h2>
            <p class="text-gray-700 leading-relaxed">
              Computer science graduate, freelancing as a developer since 2021. I mostly write Python and PHP: e-learning platforms in Laravel and Vue, automation for Android apps, and a Telegram bot. Alongside that I study machine learning (computer vision and NLP so far) and run language models locally. I'm looking for a backend, automation or Python role, ideally with some AI work in it.
            </p>
          </div>
          
          <!-- Interests Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Interests</h2>
            <div class="flex flex-wrap gap-2">
              <SkillBadge>Deep Learning</SkillBadge>
              <SkillBadge>Computer Vision</SkillBadge>
              <SkillBadge>NLP & Transformer Models</SkillBadge>
              <SkillBadge>Reinforcement Learning</SkillBadge>
              <SkillBadge>Optimization Algorithms</SkillBadge>
              <SkillBadge>Robotics</SkillBadge>
              <SkillBadge>Local AI Infrastructure</SkillBadge>
            </div>
          </div>

          <!-- Skills Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Skills</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div v-for="group in skillGroups" :key="group.title">
                <h3 class="font-medium text-gray-900 mb-3">{{ group.title }}</h3>
                <div class="flex flex-wrap gap-2">
                  <SkillBadge v-for="s in group.items" :key="s">{{ s }}</SkillBadge>
                </div>
              </div>
            </div>
          </div>

          <!-- Online Coursework Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Online Coursework (Self-Study)</h2>
            <div class="space-y-2">
              <div class="text-gray-700">• Python for Data Science & Machine Learning — Essential Training, Part 1 (LinkedIn)</div>
              <div class="text-gray-700">• Python for Data Science & Machine Learning — Essential Training, Part 2 (LinkedIn)</div>
              <div class="text-gray-700">• Deep Learning: Getting Started (LinkedIn)</div>
              <div class="text-gray-700">• Deep Learning Foundations: Natural Language Processing with TensorFlow (LinkedIn)</div>
              <div class="text-gray-700">• Machine Learning Foundations: Linear Algebra (LinkedIn)</div>
            </div>
          </div>

          <!-- Education Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Education</h2>
            <div class="space-y-3">
              <div>
                <h3 class="font-medium text-gray-900">B.Sc. Computer Science</h3>
                <p class="text-gray-600">Kashmar Higher Education Institute, Kashmar, Iran</p>
                <p class="text-gray-600">Fall 2016 - Summer 2020</p>
              </div>
              <div>
                <h3 class="font-medium text-gray-900">High School Diploma in Physics & Mathematics</h3>
                <p class="text-gray-600">Dr. Shariati School, Bandar Lengeh, Iran</p>
                <p class="text-gray-600">Spring 2014</p>
              </div>
            </div>
          </div>

          <!-- Academic & Teaching Experience Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Academic & Teaching Experience</h2>
            <div class="space-y-4">
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Teacher Assistant — Kashmar Higher Education Institute</h3>
                <p class="text-gray-600 mb-2">2017-2020</p>
                <p class="text-gray-600">Assisted in Introduction to Programming (C) and Advanced Programming (C++) - Dr. Yousef Zadeh</p>
              </div>
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Head of Education — Scientific Association</h3>
                <p class="text-gray-600 mb-2">2017-2020</p>
                <p class="text-gray-600">Kashmar Higher Education Institute</p>
              </div>
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Research Projects: Evolutionary Algorithms</h3>
                <p class="text-gray-600 mb-2">2019 · Kashmar Higher Education Institute</p>
                <p class="text-gray-600">Implemented and presented optimization techniques based on evolutionary computation</p>
              </div>
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Research Projects: Genetic Algorithm</h3>
                <p class="text-gray-600 mb-2">2019 · Kashmar Higher Education Institute</p>
                <p class="text-gray-600">Explored GA fundamentals and applications; presented findings at university</p>
              </div>
            </div>
          </div>

          <!-- Selected Undergraduate Course Scores -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Selected Undergraduate Course Scores</h2>
            <p class="text-gray-700 mb-4">
              Selected coursework with final scores on the 20-point grading scale.
            </p>
            <div class="space-y-6">
              <div
                v-for="group in courseGroups"
                :key="group.title"
                class="space-y-3"
              >
                <h3 v-if="group.title" class="font-medium text-gray-900">{{ group.title }}</h3>
                <div class="divide-y divide-gray-200 border border-gray-100 rounded-xl overflow-hidden">
                  <div
                    v-for="course in group.courses"
                    :key="course.name"
                    class="flex items-center justify-between px-4 py-3 bg-white/80"
                  >
                    <span class="text-gray-800">{{ course.name }}</span>
                    <span class="text-gray-600 font-semibold">
                      {{ course.score }} ({{ convertToLetterGrade(course.score) }})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Work Experience Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Experience</h2>
            <div class="space-y-4">
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Freelance Software Developer</h3>
                <p class="text-gray-600 mb-2">2021 – Present</p>
                <ul class="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                  <li>Build web platforms with Laravel and Vue, and a mobile app with Flutter.</li>
                  <li>Write Python tools that automate Android apps and Telegram bots.</li>
                  <li>See the <RouterLink to="/projects" class="text-brand-600 hover:text-brand-700">projects page</RouterLink> for the main examples.</li>
                </ul>
              </div>
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Game Developer — Legend Company</h3>
                <p class="text-gray-600 mb-2">2018 – 2020 · Kashmar, Iran</p>
                <ul class="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                  <li>Worked in a team of seven on a 2D educational game in Unity and C#.</li>
                  <li>Wrote core gameplay mechanics and the quiz modules that carry the learning content.</li>
                  <li>Changed gameplay and UI based on playtesting.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Research & Publications Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Research & Publications</h2>
            <div class="space-y-3">
              <div class="text-gray-700">
                • Co-developed a driving simulation game used in an IEEE-published study (Paper ID: 8712031)
              </div>
              <div class="text-gray-700">
                • Looked into ways to improve HEFT-based load-balancing algorithms, building on IEEE paper 7881902
              </div>
            </div>
          </div>
          
          <!-- Competitions Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Competitions</h2>
            <div class="space-y-2">
              <div class="text-gray-700">
                Participated in ACM programming competitions: Sharif 2018, Ferdowsi 2018
              </div>
            </div>
          </div>

          <!-- Languages Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Languages</h2>
            <div class="space-y-2">
              <div class="text-gray-700">• Persian: Native</div>
              <div class="text-gray-700">• English: B2 (self-assessed)</div>
              <div class="text-gray-700">• Spanish: about A2 (learning on Duolingo)</div>
            </div>
          </div>
          
          <!-- Presentations Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Presentations</h2>
            <div class="space-y-3">
              <div>
                <h3 class="font-medium text-gray-900">Evolutionary Algorithms</h3>
                <p class="text-gray-600">2019</p>
              </div>
              <div>
                <h3 class="font-medium text-gray-900">Genetic Algorithm</h3>
                <p class="text-gray-600">2019</p>
              </div>
            </div>
          </div>
          
          <!-- Sports Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Sports</h2>
            <div class="space-y-2">
              <div class="text-gray-700">• Karate-do: 2nd Dan Black Belt, April 2005 - 2016</div>
              <div class="text-gray-700">• Volleyball: February 2025 - Present</div>
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

// Convert 20-point scale to letter grade
const convertToLetterGrade = (score) => {
  const numScore = parseFloat(score)
  if (numScore >= 18) return 'A'
  if (numScore >= 16) return 'B'
  if (numScore >= 14) return 'C'
  if (numScore >= 12) return 'D'
  return 'F'
}

const skillGroups = [
  { title: 'Languages', items: ['Python (advanced)', 'PHP', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'C#'] },
  { title: 'Backend', items: ['Laravel', 'REST APIs', 'Sanctum auth', 'MySQL/MariaDB', 'PostgreSQL', 'Redis', 'Meilisearch', 'Laravel Reverb'] },
  { title: 'Frontend', items: ['Vue 3', 'Inertia.js', 'HTML', 'CSS', 'Tailwind CSS', 'DaisyUI', 'Vite'] },
  { title: 'Automation & Mobile', items: ['Appium (UiAutomator2)', 'ADB', 'Selenium', 'OpenCV', 'Flutter'] },
  { title: 'Data & ML', items: ['NumPy', 'pandas', 'scikit-learn', 'PyTorch (basic)', 'TensorFlow/Keras (basic)', 'Ollama', 'llama.cpp'] },
  { title: 'Tools', items: ['Git/GitHub', 'GitLab CI/CD', 'Linux (Ubuntu)', 'Apache', 'FFmpeg', 'Unit testing', 'Google Cloud (basic)'] },
  { title: 'AI-Assisted Development', items: ['ChatGPT', 'Cursor', 'Prototyping', 'Debugging'] }
]

const courseGroups = [
  {
    title: '',
    courses: [
      { name: 'Data Structures & Algorithms', score: '20.00' },
      { name: 'Advanced Programming (C++)', score: '20.00' },
      { name: 'Introduction to Programming (C)', score: '18.50' },
      { name: 'Digital Logic', score: '20.00' },
      { name: 'Linear Optimization', score: '15.00' },
      { name: 'Data Mining', score: '20.00' },
      { name: 'Scientific Computing Tools', score: '17.00' },
      { name: 'Technical English for CS', score: '20.00' },
      { name: 'Database Systems', score: '17.00' },
      { name: 'Computer Systems', score: '15.50' }
    ]
  }
]

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
