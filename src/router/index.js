import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', name: 'coaches', component: null },
    // component: () => import('../views/AboutView.vue')

  { 
    path: '/coaches/:id', name: '', component: null,
    children: [{
      path: '/contact',
      name: 'contact',
      component: null // /coaches/c1/contact
    }]
  },
  { path: '/register', name: 'register', component: null },
  { path: '/request', name: 'request', component: null },
  { path: '/:notFound(.*)', name: 'notFound', component: null }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
