import { defineAsyncComponent } from 'vue';

import { createRouter, createWebHistory } from 'vue-router'
// import CoachesDetails from '../views/coaches/CoachesDetails.vue';
import CoachesList from '../views/coaches/CoachesList.vue';
// import CoachesRegister from '../views/coaches/CoachesRegistration.vue';
// import ContactCoach from '../views/requests/ContactCoach.vue';
// import RequestReceived from '../views/requests/RequestReceived.vue';
// import NotFound from '../views/NotFound.vue';
// import UserAuth from '../views/auth/UserAuth.vue'
import store from '../store/modules/index';

const CoachesDetails = () => import('../views/coaches/CoachesDetails.vue');
const CoachesRegister = () => import('../views/coaches/CoachesRegistration.vue');
const ContactCoach = () => import('../views/requests/ContactCoach.vue');
const RequestReceived  = () => import('../views/requests/RequestReceived.vue');
const UserAuth = () => import('../views/auth/UserAuth.vue');
const NotFound = () => import('../views/NotFound.vue');

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
  { path: '/register', name: 'coaches-register', component: CoachesRegister, meta: { requiresAuth: true} },
  { path: '/requests', name: 'requests', component: RequestReceived, meta: { requiresAuth: true} },
  {path: '/auth', name: 'auth', component: UserAuth , meta: { requiresUnauth: true}},
  { path: '/:notFound(.*)', name: 'notFound', component: NotFound }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(function(to, _, next){
  if (to.meta.requiresAuth && !store.getters['auth/isAuthenticated'] ) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters['auth/isAuthenticated'] ) {
      next('/coaches');
  } else{
    next();
  }
});

// navigation guard
// router.beforeEach((to, from, next) => {
//   if (to.name === 'contact-coach') {
//     if (to.path === from.path) {
//       next(false); // Prevent navigation
//     } else {
//       next(); // Allow navigation
//     }
//   } else {
//     next(); // Allow navigation for other routes
//   }
// });

export default router
