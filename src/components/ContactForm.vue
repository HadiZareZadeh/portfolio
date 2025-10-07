<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Name Field -->
    <div class="relative">
      <input
        v-model="form.name"
        type="text"
        id="name"
        name="name"
        required
        class="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all duration-200 bg-transparent"
        placeholder=" "
      />
      <label
        for="name"
        class="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-brand-600 bg-white px-1"
      >
        Full Name
      </label>
    </div>
    
    <!-- Email Field -->
    <div class="relative">
      <input
        v-model="form.email"
        type="email"
        id="email"
        name="email"
        required
        class="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all duration-200 bg-transparent"
        placeholder=" "
      />
      <label
        for="email"
        class="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-brand-600 bg-white px-1"
      >
        Email Address
      </label>
    </div>
    
    <!-- Message Field -->
    <div class="relative">
      <textarea
        v-model="form.message"
        id="message"
        name="message"
        rows="5"
        required
        class="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all duration-200 bg-transparent resize-none"
        placeholder=" "
      ></textarea>
      <label
        for="message"
        class="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-brand-600 bg-white px-1"
      >
        Your Message
      </label>
    </div>
    
    <!-- Submit Button -->
    <button
      type="submit"
      :disabled="submitted"
      class="btn btn-primary w-full"
    >
      {{ submitted ? 'Message Sent!' : 'Send Message' }}
    </button>
    
    <!-- Success Message -->
    <div
      v-if="showSuccessMessage"
      class="text-center text-green-600 bg-green-50 border border-green-200 rounded-lg p-4"
    >
      Thanks! This is a demo form. Your message was not sent.
    </div>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)
const showSuccessMessage = ref(false)

const handleSubmit = () => {
  submitted.value = true
  showSuccessMessage.value = true
  
  // Hide success message after 4 seconds
  setTimeout(() => {
    showSuccessMessage.value = false
    submitted.value = false
    
    // Reset form
    form.name = ''
    form.email = ''
    form.message = ''
  }, 4000)
}
</script>
