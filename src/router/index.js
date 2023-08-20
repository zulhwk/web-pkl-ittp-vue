import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profil',
      name: 'profil',
      component: () => import('../views/ProfilView.vue')
    },
    {
      path: '/riwayat-laporan',
      name: 'riwayat-laporan',
      component: () => import('../views/RiwayatLaporanView.vue')
    },
    {
      path: '/laporan-akhir',
      name: 'laporan-akhir',
      component: () => import('../views/LaporanAkhirView.vue')
    },
  ]
})

export default router
