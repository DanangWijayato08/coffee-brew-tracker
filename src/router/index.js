import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TambahSeduhan from '../views/TambahSeduhan.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/tambah', component: TambahSeduhan }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router