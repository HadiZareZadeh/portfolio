<template>
  <section class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
      <div class="md:col-span-1">
        <div class="overflow-hidden rounded-2xl bg-gray-100 shadow-inner">
          <img
            class="h-full w-full object-cover"
            alt="Profile"
            src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?w=1200&q=80&auto=format&fit=crop"
          />
        </div>

        <div class="mt-6 space-y-3 text-sm">
          <div class="rounded-xl border border-gray-200 p-4">
            <dl class="space-y-2">
              <div class="flex items-start justify-between gap-4">
                <dt class="text-gray-500">Location</dt>
                <dd class="text-gray-900 text-right">Bandar Lengeh, Iran</dd>
              </div>
              <div class="flex items-start justify-between gap-4">
                <dt class="text-gray-500">Email</dt>
                <dd class="text-gray-900 text-right"><a class="hover:underline" href="mailto:Zarehadi2@gmail.com">Zarehadi2@gmail.com</a></dd>
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
          <div class="rounded-xl border border-gray-200 p-4">
            <h4 class="font-medium text-gray-900">Programming & Web Dev</h4>
            <div class="mt-3 flex flex-wrap gap-2">
              <SkillBadge>Python (Advanced)</SkillBadge>
              <SkillBadge>PHP</SkillBadge>
              <SkillBadge>Laravel</SkillBadge>
              <SkillBadge>Vue 3</SkillBadge>
              <SkillBadge>Tailwind</SkillBadge>
              <SkillBadge>Java</SkillBadge>
            </div>
          </div>
          <div class="rounded-xl border border-gray-200 p-4">
            <h4 class="font-medium text-gray-900">Data & Automation</h4>
            <div class="mt-3 flex flex-wrap gap-2">
              <SkillBadge>Python Data Mining</SkillBadge>
              <SkillBadge>Workflow Automation</SkillBadge>
              <SkillBadge>Basic AI/ML</SkillBadge>
            </div>
          </div>
          <div class="rounded-xl border border-gray-200 p-4">
            <h4 class="font-medium text-gray-900">Databases</h4>
            <div class="mt-3 flex flex-wrap gap-2">
              <SkillBadge>MySQL (Advanced)</SkillBadge>
              <SkillBadge>MongoDB (Basic)</SkillBadge>
            </div>
          </div>
          <div class="rounded-xl border border-gray-200 p-4">
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
          <li class="ml-4 mb-6">
            <div class="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-300"></div>
            <p class="text-gray-900 font-medium">Full-stack Developer @ Lyndakade (2020 – Present)</p>
          </li>
          <li class="ml-4 mb-6">
            <div class="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-300"></div>
            <p class="text-gray-900 font-medium">Mobile/Desktop App Dev @ Lyndakade (2024)</p>
          </li>
          <li class="ml-4 mb-6">
            <div class="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-300"></div>
            <p class="text-gray-900 font-medium">Python Bot Developer (2025)</p>
          </li>
          <li class="ml-4 mb-6">
            <div class="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-300"></div>
            <p class="text-gray-900 font-medium">Game Developer @ Legend Company (2018–2020)</p>
          </li>
          <li class="ml-4 mb-6">
            <div class="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-300"></div>
            <p class="text-gray-900 font-medium">Teaching Assistant @ Kashmar Higher Education Institute (2017–2020)</p>
          </li>
          <li class="ml-4 mb-6">
            <div class="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-300"></div>
            <p class="text-gray-900 font-medium">Head of Education @ Scientific Association (2017–2020)</p>
          </li>
          <li class="ml-4 mb-0">
            <div class="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-gray-300"></div>
            <p class="text-gray-900 font-medium">Secretary of Director @ Cargo Clearance Co. (2015)</p>
          </li>
        </ol>

        <h3 class="mt-10 text-lg font-semibold text-gray-900">Education</h3>
        <ul class="mt-3 space-y-2">
          <li class="rounded-xl border border-gray-200 p-4">
            <p class="text-gray-900 font-medium">B.Sc. Computer Science – Kashmar Higher Education Institute (2016–2020)</p>
          </li>
          <li class="rounded-xl border border-gray-200 p-4">
            <p class="text-gray-900 font-medium">High School Diploma in Physics & Mathematics – Dr. Shariati School (2014)</p>
          </li>
        </ul>

        <h3 class="mt-10 text-lg font-semibold text-gray-900">Presentations</h3>
        <ul class="mt-3 space-y-2">
          <li class="rounded-xl border border-gray-200 p-4">
            <p class="text-gray-900 font-medium">Thesis: Lyndakade (2020)</p>
          </li>
          <li class="rounded-xl border border-gray-200 p-4">
            <p class="text-gray-900 font-medium">Evolutionary Algorithms (2019)</p>
          </li>
          <li class="rounded-xl border border-gray-200 p-4">
            <p class="text-gray-900 font-medium">Genetic Algorithm (2019)</p>
          </li>
        </ul>

        <h3 class="mt-10 text-lg font-semibold text-gray-900">Sports & Achievements</h3>
        <ul class="mt-3 space-y-2">
          <li class="rounded-xl border border-gray-200 p-4">
            <p class="text-gray-900 font-medium">Karate-do: 2nd Dan Black Belt, 9 gold medals (2005–2016)</p>
          </li>
          <li class="rounded-xl border border-gray-200 p-4">
            <p class="text-gray-900 font-medium">Self-Defense Training (2019–2020)</p>
          </li>
        </ul>

        <h3 class="mt-10 text-lg font-semibold text-gray-900">Hobbies & Interests</h3>
        <div class="mt-3 flex flex-wrap gap-2">
          <SkillBadge>Camping & Outdoor Adventures</SkillBadge>
          <SkillBadge>Socializing (Couchsurfing)</SkillBadge>
          <SkillBadge>Music & Movies</SkillBadge>
          <SkillBadge>Algorithm Challenges</SkillBadge>
          <SkillBadge>Short Fiction</SkillBadge>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillBadge from '../components/SkillBadge.vue';
</script>


