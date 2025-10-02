<template>
  <form @submit.prevent="handleSubmit" class="mx-auto w-full max-w-xl space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">Name</label>
      <input v-model="form.name" type="text" required class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900" placeholder="Your name" />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Email</label>
      <input v-model="form.email" type="email" required class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900" placeholder="you@example.com" />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Message</label>
      <textarea v-model="form.message" rows="5" required class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900" placeholder="Tell me about your project..." />
    </div>
    <button type="submit" class="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
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


