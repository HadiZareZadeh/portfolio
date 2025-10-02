<template>
  <section class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div>
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">Get in touch</h2>
        <p class="mt-2 text-gray-600">Have a project or idea? Let's talk.</p>

        <div class="mt-6 flex items-center gap-3 text-sm">
          <a href="https://www.linkedin.com/in/hadi-zare-zadeh-686113182" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.271c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 11.271h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.867 0-2.153 1.459-2.153 2.967v5.696h-3v-10h2.881v1.367h.041c.402-.761 1.381-1.563 2.842-1.563 3.04 0 3.605 2.002 3.605 4.604v5.592z"/></svg>
            LinkedIn
          </a>
          <a href="https://github.com/HadiZareZadeh" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492 .997 .108-.775 .418-1.305 .762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.311 .469-2.381 1.236-3.221-.124-.303-.536-1.523 .117-3.176 0 0 1.008-.322 3.301 1.23 .957-.266 1.983-.399 3.003-.404 1.02 .005 2.047 .138 3.006 .404 2.291-1.552 3.297-1.23 3.297-1.23 .655 1.653 .243 2.873 .119 3.176 .77 .84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.625-5.479 5.922 .43 .371 .823 1.102 .823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319 .191 .694 .801 .576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="mailto:HadiZareZadeh00@gmail.com" class="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 13.5l-11.99-7.5h23.98l-11.99 7.5zm0 2.25l-12-7.5v12.75h24v-12.75l-12 7.5z"/></svg>
            Email
          </a>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue';
</script>


