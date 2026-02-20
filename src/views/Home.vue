<script setup>
import { computed } from 'vue'
import { brewStore } from '../store/brewStore'

const totalSeduhan = computed(() => brewStore.daftarSeduhan.length)

const rataRasio = computed(() => {
  if (brewStore.daftarSeduhan.length === 0) return 0

  const total = brewStore.daftarSeduhan.reduce((acc, item) => {
    return acc + (item.gramAir / item.gramKopi)
  }, 0)

  return (total / brewStore.daftarSeduhan.length).toFixed(1)
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 px-6 py-10">
    <div class="max-w-3xl mx-auto">

      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold tracking-tight text-amber-400">
            ☕ Coffee Brew Tracker
          </h1>
          <p class="text-slate-400 mt-2">
            Catat dan analisis seduhan kopimu dengan rapi.
          </p>
        </div>

        <router-link
          to="/tambah"
          class="bg-amber-500 hover:bg-amber-600 text-black px-5 py-2 rounded-xl font-semibold transition shadow-lg"
        >
          + Tambah
        </router-link>
      </div>

      <!-- Divider -->
      <div class="h-px bg-slate-800 my-8"></div>

      <!-- Empty State -->
      <div
        v-if="brewStore.daftarSeduhan.length === 0"
        class="text-center py-16 border border-dashed border-slate-800 rounded-2xl"
      >
        <p class="text-slate-500">
          Belum ada seduhan tercatat.
        </p>
      </div>

      <!-- List Seduhan -->
      <div v-else class="space-y-6">
        <div
          v-for="(seduhan, index) in brewStore.daftarSeduhan"
          :key="index"
          class="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
        >

          <!-- Header Card -->
          <div class="flex justify-between items-center mb-4">
            <h2 class="font-semibold text-lg text-amber-400">
              {{ seduhan.metode }}
            </h2>
            <span class="text-sm text-slate-500">
              #{{ index + 1 }}
            </span>
          </div>

          <!-- Detail Grid -->
          <div class="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p class="text-slate-500">Kopi</p>
              <p class="font-semibold">{{ seduhan.gramKopi }}g</p>
            </div>

            <div>
              <p class="text-slate-500">Air</p>
              <p class="font-semibold">{{ seduhan.gramAir }}g</p>
            </div>

            <div>
              <p class="text-slate-500">Rasio</p>
              <p class="font-semibold">
                1 : {{ (seduhan.gramAir / seduhan.gramKopi).toFixed(1) }}
              </p>
            </div>
          </div>

          <!-- Rating -->
          <div class="mt-4">
            <p class="text-slate-500 text-sm">Rating</p>
            <p class="font-semibold text-amber-400">
              ⭐ {{ seduhan.rating || 0 }} / 5
            </p>
          </div>

          <!-- Catatan -->
          <div
            v-if="seduhan.catatan"
            class="mt-3"
          >
            <p class="text-slate-500 text-sm">Catatan</p>
            <p class="text-sm italic text-slate-300">
              "{{ seduhan.catatan }}"
            </p>
          </div>

          <!-- Tombol Hapus -->
          <button
            @click="brewStore.daftarSeduhan.splice(index, 1)"
            class="mt-6 text-xs text-red-400 hover:text-red-500 transition"
          >
            Hapus
          </button>

        </div>
      </div>

    </div>
  </div>
</template>