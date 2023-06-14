export default {
  namespaced: true,
  state (){
    return{
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
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
          areas: ['frontend', 'backend', 'career'],
          description: "I'm Dwayne and I've worked as a freelance app developer for years. ",
          hourlyRate: 40
        }   
      ]
    }
  },
  mutations: {},
  actions: {},
  getters: {
    coaches(state) {
      return state.coaches;
    },
    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    }
  }
}