<script setup>
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    
    <!-- Navbar -->
    <header class="border-b border-slate-800 bg-slate-900/70 backdrop-blur sticky top-0 z-50">
      <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <router-link to="/" class="text-lg font-bold text-amber-400">
          ☕ BrewTracker
        </router-link>

        <router-link
          to="/tambah"
          class="text-sm bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-lg font-semibold transition"
        >
          Tambah Seduhan
        </router-link>
      </div>
    </header>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-6 py-10">
      <slot />
    </main>

  </div>
</template>