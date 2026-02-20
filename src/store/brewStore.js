import { reactive, watch } from 'vue'

// Ambil data dari localStorage kalau ada
const savedData = localStorage.getItem('daftarSeduhan')

export const brewStore = reactive({
  daftarSeduhan: savedData ? JSON.parse(savedData) : []
})

// Setiap ada perubahan, simpan ke localStorage
watch(
  () => brewStore.daftarSeduhan,
  (newValue) => {
    localStorage.setItem('daftarSeduhan', JSON.stringify(newValue))
  },
  { deep: true }
)