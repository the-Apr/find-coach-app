import { createRouter, createWebHistory } from 'vue-router'
import CoachesDetails from '../views/coaches/CoachesDetails.vue';
import CoachesList from '../views/coaches/CoachesList.vue';
import CoachesRegister from '../views/coaches/CoachesRegistration.vue';
import ContactCoach from '../views/requests/ContactCoach.vue';
import RequestReceived from '../views/requests/RequestReceived.vue';
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', name: 'coaches-list', component: CoachesList },
    // component: () => import('../views/AboutView.vue')

  { 
    path: '/coaches/:id', name: 'coaches-detail', component: CoachesDetails, props: true,
    children: [
      {
        path: 'contact',
        name: 'contact-coach',
        component: ContactCoach // /coaches/c1/contact
      }
    ]
  },
  { path: '/register', name: 'coaches-register', component: CoachesRegister },
  { path: '/requests', name: 'requests', component: RequestReceived },
  { path: '/:notFound(.*)', name: 'notFound', component: NotFound }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
