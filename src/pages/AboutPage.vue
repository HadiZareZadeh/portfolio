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
      </div>
      <div class="md:col-span-2">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">About Me</h2>
        <p class="mt-4 text-gray-600 max-w-prose">
          I'm a full-stack developer focused on creating clean, performant web applications. This is placeholder text that you can replace with your own biography, background, and interests.
        </p>

        <h3 class="mt-8 text-lg font-semibold text-gray-900">Skills</h3>
        <div class="mt-3 flex flex-wrap gap-2">
          <SkillBadge>Vue 3</SkillBadge>
          <SkillBadge>Laravel</SkillBadge>
          <SkillBadge>Tailwind CSS</SkillBadge>
          <SkillBadge>TypeScript</SkillBadge>
          <SkillBadge>Python</SkillBadge>
          <SkillBadge>Git</SkillBadge>
          <SkillBadge>Docker</SkillBadge>
          <SkillBadge>MySQL</SkillBadge>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillBadge from '../components/SkillBadge.vue';
</script>


