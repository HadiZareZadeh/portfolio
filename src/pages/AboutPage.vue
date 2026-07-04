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
              <!--
              <div class="flex items-center space-x-3">
                <span class="text-gray-500">📱</span>
                <a href="tel:+989211917302" class="text-brand-600 hover:text-brand-700">
                  +98 921 191 7302
                </a>
              </div>
              -->
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
                <span class="text-gray-700">Persian (Native), English (B2 — preparing for IELTS/TOEFL), Spanish (A2)</span>
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
              Computer Science graduate with strong foundations in algorithms, optimization, and software engineering, now transitioning toward Machine Learning and AI research. Passionate about deep learning, computer vision, NLP, and reinforcement learning, with a growing portfolio of Python-based projects involving automation, data processing, and algorithmic problem-solving. Experienced with LLM-assisted development workflows (ChatGPT, Cursor) for prototyping, debugging, and accelerating project delivery since 2023. Motivated by long-term research-driven challenges and seeking opportunities to develop advanced AI systems while contributing to innovative and impactful projects.
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
              <SkillBadge>Representation Learning</SkillBadge>
              <SkillBadge>Optimization Algorithms</SkillBadge>
              <SkillBadge>Autonomous Systems</SkillBadge>
              <SkillBadge>Applied AI Research</SkillBadge>
            </div>
          </div>

          <!-- Skills Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Skills</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h3 class="font-medium text-gray-900 mb-3">Programming</h3>
                <div class="flex flex-wrap gap-2">
                  <SkillBadge>Python (advanced)</SkillBadge>
                  <SkillBadge>PHP/Laravel</SkillBadge>
                  <SkillBadge>JavaScript (Vue 3)</SkillBadge>
                </div>
              </div>
              
              <div>
                <h3 class="font-medium text-gray-900 mb-3">Data & ML</h3>
                <div class="flex flex-wrap gap-2">
                  <SkillBadge>NumPy</SkillBadge>
                  <SkillBadge>pandas</SkillBadge>
                  <SkillBadge>scikit-learn</SkillBadge>
                  <SkillBadge>PyTorch (basic)</SkillBadge>
                  <SkillBadge>TensorFlow/Keras (basic)</SkillBadge>
                  <SkillBadge>EDA</SkillBadge>
                  <SkillBadge>Data Wrangling</SkillBadge>
                </div>
              </div>
              
              <div>
                <h3 class="font-medium text-gray-900 mb-3">Databases</h3>
                <div class="flex flex-wrap gap-2">
                  <SkillBadge>MySQL/MariaDB</SkillBadge>
                </div>
              </div>
              
              <div>
                <h3 class="font-medium text-gray-900 mb-3">Automation & Tools</h3>
                <div class="flex flex-wrap gap-2">
                  <SkillBadge>Python Automation</SkillBadge>
                  <SkillBadge>Appium</SkillBadge>
                  <SkillBadge>Selenium</SkillBadge>
                  <SkillBadge>Git/GitHub</SkillBadge>
                  <SkillBadge>Linux</SkillBadge>
                  <SkillBadge>REST APIs</SkillBadge>
                </div>
              </div>
              
              <div>
                <h3 class="font-medium text-gray-900 mb-3">AI-Assisted Development</h3>
                <div class="flex flex-wrap gap-2">
                  <SkillBadge>ChatGPT</SkillBadge>
                  <SkillBadge>Cursor</SkillBadge>
                  <SkillBadge>Prototyping</SkillBadge>
                  <SkillBadge>Debugging</SkillBadge>
                  <SkillBadge>Code Review</SkillBadge>
                </div>
              </div>

              <div>
                <h3 class="font-medium text-gray-900 mb-3">Other</h3>
                <div class="flex flex-wrap gap-2">
                  <SkillBadge>Google Cloud (basic)</SkillBadge>
                  <SkillBadge>Unit Testing</SkillBadge>
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
                <h3 class="font-medium text-gray-900">Game Developer — Legend Company</h3>
                <p class="text-gray-600 mb-2">2018-2020 · Kashmar, Iran</p>
                <ul class="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                  <li>Developed a 2D educational game in a 7-member team using Unity & C#</li>
                  <li>Implemented core gameplay mechanics and integrated quiz-based learning modules</li>
                  <li>Improved user experience based on playtesting and iteration</li>
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
                • Investigated improvements to HEFT-based load-balancing algorithms (referencing IEEE 7881902)
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
              <div class="text-gray-700">• English: B2 (IELTS preparation in progress)</div>
              <div class="text-gray-700">• Spanish: A2 (on Duolingo)</div>
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
</script>
