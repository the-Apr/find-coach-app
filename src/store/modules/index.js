import { createStore } from 'vuex'
import coachesModule from './coaches/index'
import requestsModule from './requests/index'

export default createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule
  },
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
})
