<template>
  <section class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
      <div class="md:col-span-1" v-reveal>
        <div class="overflow-hidden rounded-2xl bg-gray-100 shadow-inner will-change-transform" @mousemove="onTilt" @mouseleave="resetTilt" :style="tiltStyle">
          <img
            class="h-full w-full object-cover"
            alt="Profile"
            :src="avatarUrl"
          />
        </div>

        <div class="mt-6 space-y-3 text-sm" v-reveal>
          <div class="rounded-xl border border-gray-200 p-4">
            <dl class="space-y-2">
              <div class="flex items-start justify-between gap-4">
                <dt class="text-gray-500">Location</dt>
                <dd class="text-gray-900 text-right">Bandar Lengeh, Iran</dd>
              </div>
              <div class="flex items-start justify-between gap-4">
                <dt class="text-gray-500">Email</dt>
                <dd class="text-gray-900 text-right"><a class="hover:underline" href="mailto:HadiZareZadeh00@gmail.com">HadiZareZadeh00@gmail.com</a></dd>
              </div>
              <div class="flex items-start justify-between gap-4">
                <dt class="text-gray-500">Phone</dt>
                <dd class="text-gray-900 text-right"><a class="hover:underline" href="tel:+989211917302">+989211917302</a></dd>
              </div>
              <div class="flex items-start justify-between gap-4">
                <dt class="text-gray-500">GitHub</dt>
                <dd class="text-gray-900 text-right"><a class="hover:underline" href="https://github.com/HadiZareZadeh" target="_blank" rel="noreferrer">GitHub Profile</a></dd>
              </div>
              <div class="flex items-start justify-between gap-4">
                <dt class="text-gray-500">LinkedIn</dt>
                <dd class="text-gray-900 text-right"><a class="hover:underline" href="https://www.linkedin.com/in/hadi-zare-zadeh-686113182" target="_blank" rel="noreferrer">LinkedIn Profile</a></dd>
              </div>
              <div class="flex items-start justify-between gap-4">
                <dt class="text-gray-500">Languages</dt>
                <dd class="text-gray-900 text-right">Persian (Native), English (B2), Spanish (A2)</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div class="md:col-span-2">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">About Me</h2>
        <p class="mt-4 text-gray-600 max-w-prose">
          I am a passionate Full-Stack Web Developer with a B.Sc. in Computer Science (Kashmar Higher Education Institute, 2020). Began programming at age 9, now specializing in modern frameworks (Laravel, Vue 3, Tailwind CSS) and Python automation. Experienced in building web applications, data mining, and automating workflows. Adaptable, analytical, and always seeking opportunities for growth.
        </p>

        <h3 class="mt-10 text-lg font-semibold text-gray-900">Skills</h3>
        <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="rounded-xl border border-gray-200 p-4" v-reveal>
            <h4 class="font-medium text-gray-900">Programming & Web Dev</h4>
            <div class="mt-3 flex flex-wrap gap-2">
              <SkillBadge class="hover:shadow-soft transition-transform hover:-translate-y-0.5">Python (Advanced)</SkillBadge>
              <SkillBadge class="hover:shadow-soft transition-transform hover:-translate-y-0.5">PHP</SkillBadge>
              <SkillBadge class="hover:shadow-soft transition-transform hover:-translate-y-0.5">Laravel</SkillBadge>
              <SkillBadge class="hover:shadow-soft transition-transform hover:-translate-y-0.5">Vue 3</SkillBadge>
              <SkillBadge class="hover:shadow-soft transition-transform hover:-translate-y-0.5">Tailwind</SkillBadge>
              <SkillBadge class="hover:shadow-soft transition-transform hover:-translate-y-0.5">Java</SkillBadge>
            </div>
          </div>
          <div class="rounded-xl border border-gray-200 p-4" v-reveal>
            <h4 class="font-medium text-gray-900">Data & Automation</h4>
            <div class="mt-3 flex flex-wrap gap-2">
              <SkillBadge>Python Data Mining</SkillBadge>
              <SkillBadge>Workflow Automation</SkillBadge>
              <SkillBadge>Basic AI/ML</SkillBadge>
            </div>
          </div>
          <div class="rounded-xl border border-gray-200 p-4" v-reveal>
            <h4 class="font-medium text-gray-900">Databases</h4>
            <div class="mt-3 flex flex-wrap gap-2">
              <SkillBadge>MySQL (Advanced)</SkillBadge>
              <SkillBadge>MongoDB (Basic)</SkillBadge>
            </div>
          </div>
          <div class="rounded-xl border border-gray-200 p-4" v-reveal>
            <h4 class="font-medium text-gray-900">Other</h4>
            <div class="mt-3 flex flex-wrap gap-2">
              <SkillBadge>Git/GitHub/GitLab</SkillBadge>
              <SkillBadge>Flutter (Basic)</SkillBadge>
              <SkillBadge>Unity (Basic)</SkillBadge>
              <SkillBadge>Google Cloud (Basic)</SkillBadge>
              <SkillBadge>Linux & Windows</SkillBadge>
            </div>
          </div>
        </div>

        <h3 class="mt-10 text-lg font-semibold text-gray-900">Experience</h3>
        <ol class="mt-3 relative border-l border-gray-200">
          <li class="ml-4 pl-5 mb-6" v-reveal>
            <div class="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-300"></div>
            <p class="text-gray-900 font-medium">Full-stack Developer @ Lyndakade (2020 – Present)</p>
          </li>
          <li class="ml-4 pl-5 mb-6" v-reveal>
            <div class="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-300"></div>
            <p class="text-gray-900 font-medium">Mobile/Desktop App Dev @ Lyndakade (2024)</p>
          </li>
          <li class="ml-4 pl-5 mb-6" v-reveal>
            <div class="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-300"></div>
            <p class="text-gray-900 font-medium">Python Bot Developer (2025)</p>
          </li>
          <li class="ml-4 pl-5 mb-6" v-reveal>
            <div class="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-300"></div>
            <p class="text-gray-900 font-medium">Game Developer @ Legend Company (2018–2020)</p>
          </li>
          <li class="ml-4 pl-5 mb-6" v-reveal>
            <div class="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-300"></div>
            <p class="text-gray-900 font-medium">Teaching Assistant @ Kashmar Higher Education Institute (2017–2020)</p>
          </li>
          <li class="ml-4 pl-5 mb-6" v-reveal>
            <div class="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-300"></div>
            <p class="text-gray-900 font-medium">Head of Education @ Scientific Association (2017–2020)</p>
          </li>
          <li class="ml-4 pl-5 mb-0" v-reveal>
            <div class="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-300"></div>
            <p class="text-gray-900 font-medium">Secretary of Director @ Cargo Clearance Co. (2015)</p>
          </li>
        </ol>

        <h3 class="mt-10 text-lg font-semibold text-gray-900">Education</h3>
        <ul class="mt-3 space-y-2">
          <li class="rounded-xl border border-gray-200 p-4" v-reveal>
            <p class="text-gray-900 font-medium">B.Sc. Computer Science – Kashmar Higher Education Institute (2016–2020)</p>
          </li>
          <li class="rounded-xl border border-gray-200 p-4" v-reveal>
            <p class="text-gray-900 font-medium">High School Diploma in Physics & Mathematics – Dr. Shariati School (2014)</p>
          </li>
        </ul>

        <h3 class="mt-10 text-lg font-semibold text-gray-900">Presentations</h3>
        <ul class="mt-3 space-y-2">
          <li class="rounded-xl border border-gray-200 p-4" v-reveal>
            <p class="text-gray-900 font-medium">Thesis: Lyndakade (2020)</p>
          </li>
          <li class="rounded-xl border border-gray-200 p-4" v-reveal>
            <p class="text-gray-900 font-medium">Evolutionary Algorithms (2019)</p>
          </li>
          <li class="rounded-xl border border-gray-200 p-4" v-reveal>
            <p class="text-gray-900 font-medium">Genetic Algorithm (2019)</p>
          </li>
        </ul>

        <h3 class="mt-10 text-lg font-semibold text-gray-900">Sports & Achievements</h3>
        <ul class="mt-3 space-y-2">
          <li class="rounded-xl border border-gray-200 p-4" v-reveal>
            <p class="text-gray-900 font-medium">Karate-do: 2nd Dan Black Belt, 9 gold medals (2005–2016)</p>
          </li>
          <li class="rounded-xl border border-gray-200 p-4" v-reveal>
            <p class="text-gray-900 font-medium">Self-Defense Training (2019–2020)</p>
          </li>
        </ul>

        <h3 class="mt-10 text-lg font-semibold text-gray-900">Hobbies & Interests</h3>
        <div class="mt-3 flex flex-wrap gap-2">
          <SkillBadge class="hover:shadow-soft transition-transform hover:-translate-y-0.5">Camping & Outdoor Adventures</SkillBadge>
          <SkillBadge class="hover:shadow-soft transition-transform hover:-translate-y-0.5">Socializing (Couchsurfing)</SkillBadge>
          <SkillBadge class="hover:shadow-soft transition-transform hover:-translate-y-0.5">Music & Movies</SkillBadge>
          <SkillBadge class="hover:shadow-soft transition-transform hover:-translate-y-0.5">Algorithm Challenges</SkillBadge>
          <SkillBadge class="hover:shadow-soft transition-transform hover:-translate-y-0.5">Short Fiction</SkillBadge>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillBadge from '../components/SkillBadge.vue';
import { ref, computed } from 'vue';
import { proxyImageUrl } from '../utils/imageProxy';

// Tilt effect for profile card
const tiltX = ref(0);
const tiltY = ref(0);
const onTilt = (e) => {
  const target = e.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const percentX = (x / rect.width) - 0.5;
  const percentY = (y / rect.height) - 0.5;
  tiltX.value = percentY * -8;
  tiltY.value = percentX * 8;
};
const resetTilt = () => { tiltX.value = 0; tiltY.value = 0; };
const tiltStyle = computed(() => ({
  transform: `perspective(800px) rotateX(${tiltX.value}deg) rotateY(${tiltY.value}deg)`,
  transition: 'transform 200ms ease-out',
}));

const avatarUrl = computed(() => proxyImageUrl('https://images.unsplash.com/photo-1546525848-3ce03ca516f6?w=1200&q=80&auto=format&fit=crop', { width: 1200, quality: 80, auto: 'format', fit: 'crop' }));
</script>


