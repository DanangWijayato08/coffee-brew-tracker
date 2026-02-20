<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { brewStore } from '../store/brewStore'

const router = useRouter()
const rating = ref(0)
const catatan = ref('')
const metode = ref('')
const gramKopi = ref('')
const gramAir = ref('')

function simpanSeduhan() {
  if (!metode.value || !gramKopi.value || !gramAir.value) {
    alert("Semua field harus diisi!")
    return
  }

  brewStore.daftarSeduhan.push({
    metode: metode.value,
    gramKopi: Number(gramKopi.value),
    gramAir: Number(gramAir.value),
    rating: rating.value,
    catatan: catatan.value
  })

  router.push('/')
}
</script>

<template>
  <div class="max-w-lg mx-auto">
    <h1 class="text-2xl font-bold text-amber-400 mb-8">
      Tambah Seduhan Baru
    </h1>

    <div class="space-y-6">
      <div>
        <label class="block text-sm text-slate-400 mb-2">
          Metode Seduh
        </label>
        <input
          v-model="metode"
          class="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-500 outline-none transition"
        />
      </div>

      <div>
        <label class="block text-sm text-slate-400 mb-2">
          Gram Kopi
        </label>
        <input
          v-model="gramKopi"
          type="number"
          class="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-500 outline-none transition"
        />
      </div>

      <div>
        <label class="block text-sm text-slate-400 mb-2">
          Gram Air
        </label>
        <input
          v-model="gramAir"
          type="number"
          class="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-500 outline-none transition"
        />
      </div>
      <div>
  <label class="block text-sm text-slate-400 mb-2">
    Rating Rasa (1-5)
  </label>
  <input
    v-model="rating"
    type="number"
    min="1"
    max="5"
    class="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-500 outline-none transition"
  />
</div>

<div>
  <label class="block text-sm text-slate-400 mb-2">
    Catatan Rasa
  </label>
  <textarea
    v-model="catatan"
    rows="3"
    class="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-500 outline-none transition"
  ></textarea>
</div>
      <button
        @click="simpanSeduhan"
        class="w-full bg-amber-500 hover:bg-amber-600 text-black py-3 rounded-xl font-semibold transition shadow-lg"
      >
        Simpan Seduhan
      </button>
    </div>
  </div>
</template>