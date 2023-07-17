import { createStore } from 'vuex'
import coachesModule from './coaches/index'
import requestsModule from './requests/index'
import authModule from './auth/index'

export default createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule
  },
  state () {
    
  },
  getters: {
    
  },
  mutations: {
  },
  actions: {
  }
})
