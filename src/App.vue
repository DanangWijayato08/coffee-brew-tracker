<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.documentElement.classList.add('dark')
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
    <div class="flex items-center justify-center min-h-screen">
      <h1 class="text-4xl font-bold text-amber-700 dark:text-amber-400">
        ☕ Coffee Brew Tracker
      </h1>
    </div>
  </div>
</template>
