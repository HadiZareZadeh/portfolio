<template>
  <form @submit.prevent="handleSubmit" class="mx-auto w-full max-w-xl space-y-5" v-reveal>
    <div class="relative">
      <input v-model="form.name" type="text" required id="name" class="peer w-full rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm placeholder-transparent focus:border-brand-600 focus:ring-brand-600 focus:outline-none transition" placeholder="Your name" />
      <label for="name" class="pointer-events-none absolute left-3 top-2 px-1 text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-0.5rem] peer-focus:bg-white peer-focus:text-xs peer-focus:text-brand-700">Name</label>
    </div>
    <div class="relative">
      <input v-model="form.email" type="email" required id="email" class="peer w-full rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm placeholder-transparent focus:border-brand-600 focus:ring-brand-600 focus:outline-none transition" placeholder="you@example.com" />
      <label for="email" class="pointer-events-none absolute left-3 top-2 px-1 text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-0.5rem] peer-focus:bg-white peer-focus:text-xs peer-focus:text-brand-700">Email</label>
    </div>
    <div class="relative">
      <textarea v-model="form.message" rows="5" required id="message" class="peer w-full rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm placeholder-transparent focus:border-brand-600 focus:ring-brand-600 focus:outline-none transition" placeholder="Tell me about your project..." />
      <label for="message" class="pointer-events-none absolute left-3 top-2 px-1 text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-0.5rem] peer-focus:bg-white peer-focus:text-xs peer-focus:text-brand-700">Message</label>
    </div>
    <button type="submit" class="btn-primary">
      Send Message
    </button>
    <p v-if="submitted" class="text-sm text-green-700">Thanks! This is a demo form. Your message was not sent.</p>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({ name: '', email: '', message: '' });
const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
  setTimeout(() => { submitted.value = false; }, 4000);
}
</script>


