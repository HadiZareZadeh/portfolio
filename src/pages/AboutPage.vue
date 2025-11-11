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
                <span class="text-gray-700">Bandar Lengeh, Iran</span>
              </div>
              <div class="flex items-center space-x-3">
                <span class="text-gray-500">🎓</span>
                <span class="text-gray-700">Preparing applications for Data Science master's programs (Fall 2026 intake)</span>
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
                <a href="https://www.linkedin.com/in/hadi-zare-zadeh-686113182" target="_blank" rel="noopener noreferrer" class="text-brand-600 hover:text-brand-700">
                  LinkedIn
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <span class="text-gray-500">🗣️</span>
                <span class="text-gray-700">Persian (Native), English (B2), Spanish (A2)</span>
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
              I recently completed my B.Sc. in Computer Science (Kashmar Higher Education Institute, 2020) and I am building a graduate-school-ready foundation in data science. Through course projects, peer collaborations, and self-guided labs, I focus on understanding core concepts like data wrangling, model evaluation, and responsible experimentation. I am now seeking master's programs and research groups where I can grow as a student researcher and contribute to evidence-based decisions.
            </p>
          </div>
          
          <!-- Skills Section -->
          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Skills</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h3 class="font-medium text-gray-900 mb-3">Data Science & ML Foundations</h3>
                <div class="flex flex-wrap gap-2">
                  <SkillBadge>Data Wrangling</SkillBadge>
                  <SkillBadge>Exploratory Data Analysis</SkillBadge>
                  <SkillBadge>Supervised Learning</SkillBadge>
                  <SkillBadge>Unsupervised Learning</SkillBadge>
                  <SkillBadge>CNNs & Transfer Learning</SkillBadge>
                  <SkillBadge>Model Evaluation</SkillBadge>
                  <SkillBadge>Feature Engineering</SkillBadge>
                </div>
              </div>
              
              <div>
                <h3 class="font-medium text-gray-900 mb-3">Python Ecosystem (Coursework)</h3>
                <div class="flex flex-wrap gap-2">
                  <SkillBadge>pandas</SkillBadge>
                  <SkillBadge>NumPy</SkillBadge>
                  <SkillBadge>scikit-learn</SkillBadge>
                  <SkillBadge>PyTorch (Intro)</SkillBadge>
                  <SkillBadge>TensorFlow/Keras (Intro)</SkillBadge>
                  <SkillBadge>Matplotlib</SkillBadge>
                  <SkillBadge>Seaborn</SkillBadge>
                </div>
              </div>
              
              <div>
                <h3 class="font-medium text-gray-900 mb-3">Programming & Platforms</h3>
                <div class="flex flex-wrap gap-2">
                  <SkillBadge>Python (Academic & Internship)</SkillBadge>
                  <SkillBadge>PHP/Laravel</SkillBadge>
                  <SkillBadge>Java</SkillBadge>
                  <SkillBadge>JavaScript/Vue.js 3</SkillBadge>
                  <SkillBadge>Flutter (Basic)</SkillBadge>
                  <SkillBadge>GPC Scripting (PS4/PS5)</SkillBadge>
                </div>
              </div>
              
              <div>
                <h3 class="font-medium text-gray-900 mb-3">Data & DevOps Basics</h3>
                <div class="flex flex-wrap gap-2">
                  <SkillBadge>MySQL/MariaDB</SkillBadge>
                  <SkillBadge>MongoDB (Basic)</SkillBadge>
                  <SkillBadge>GitHub</SkillBadge>
                  <SkillBadge>GitLab</SkillBadge>
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
                <h3 class="font-medium text-gray-900">Python Automation Developer — Plato Platform</h3>
                <p class="text-gray-600">2025 · Built emulator-driven automation with logging, monitoring, and scaling practices.</p>
              </div>
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Mobile & Desktop App Developer — Lyndakade</h3>
                <p class="text-gray-600">2024 · Created Flutter applications targeting mobile and desktop platforms.</p>
              </div>
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Full-stack Developer — Lyndakade</h3>
                <p class="text-gray-600">2023 – 2024 · Shipped e-commerce systems (Laravel + Vue 3) and maintained data-driven workflows.</p>
              </div>
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Game Developer — Legend Company</h3>
                <p class="text-gray-600">2018 – 2020 · Built student-led game prototypes and gameplay systems as part of early career exploration.</p>
              </div>
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Teaching Assistant — Kashmar HEI</h3>
                <p class="text-gray-600">2017 – 2020 · Supported C and C++ programming courses and algorithm mentoring.</p>
              </div>
              <div class="border-l-2 border-brand-600 pl-4">
                <h3 class="font-medium text-gray-900">Head of Education — Scientific Association</h3>
                <p class="text-gray-600">2017 – 2020 · Coordinated academic initiatives and peer-led training.</p>
              </div>
            </div>
          </div>

          <div v-reveal class="card p-6">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Coursework & Labs</h2>
            <div class="space-y-4 text-gray-700">
              <p>Highlights from university courses, teaching assistant work, and self-paced labs that prepared me for graduate-level data science study.</p>
              <div>
                <h3 class="font-medium text-gray-900">Supervised Learning</h3>
                <p>Logistic/linear regression, SVMs, tree ensembles, model selection, cross-validation, and metric analysis (accuracy, F1, ROC-AUC, MAE/RMSE).</p>
              </div>
              <div>
                <h3 class="font-medium text-gray-900">Unsupervised Learning</h3>
                <p>K-Means clustering, PCA for dimensionality reduction, and visualization-driven insights.</p>
              </div>
              <div>
                <h3 class="font-medium text-gray-900">CNN Experiments</h3>
                <p>Built and tuned convolutional models with augmentation, regularization, and transfer learning in PyTorch and Keras.</p>
              </div>
              <div>
                <h3 class="font-medium text-gray-900">Data Wrangling & Features</h3>
                <p>Pandas-based cleaning, joins, scaling, encoding, and exploratory visuals with Matplotlib/Seaborn.</p>
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
              <div class="text-gray-700">• Volleyball (2025 – Present)</div>
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
