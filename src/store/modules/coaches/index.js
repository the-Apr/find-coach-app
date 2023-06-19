export default {
  namespaced: true,
  state (){
    return{
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend'],
          description: "I'm Maximillian and I've worked as a freelance web developer for years. ",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Jason',
          lastName: 'Statham',
          areas: ['frontend', 'backend', 'career'],
          description: "I'm Jason and I've worked as a freelance web developer for years. ",
          hourlyRate: 20
        },
        {
          id: 'c3',
          firstName: 'Dwayne',
          lastName: 'Johnson',
          areas: ['frontend','career'],
          description: "I'm Dwayne and I've worked as a freelance app developer for years. ",
          hourlyRate: 40
        }   
      ]
    }
  },
  mutations: {
    registerCoach(state, payload){
      state.coaches.push(payload)
    }
  },
  actions: {
    registerCoach(context, data) {
      const coachData = {
        id: context.rootGetters.userId,
        firstName: data.first,
        lastName: data.last,
        description: data.desc,
        hourlyRate: data.rate,
        areas: data.areas
      };
      context.commit('registerCoach',coachData)
    }
  },
  getters: {
    coaches(state) {
      return state.coaches;
    },
    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
    isCoach(_, getters, _2, rootGetters){
      const coaches = getters.coaches;
      const userId = rootGetters.userId;
      return coaches.some(coach => coach.id === userId)
    }
  }
}