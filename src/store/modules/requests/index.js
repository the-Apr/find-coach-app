export default {
  namespaced: true,

  state(){
    return{
      requests: []
    }
  },


  mutations: {
    addRequest(state, payload) {
      state.requests.push(payload)
    },
    setRequest(state,payload){
      state.requests = payload
    }
  },


  actions: {
    async contactCoach(context,payload){
      
      const newRequest = {
        id: new Date().toISOString(),
        userEmail: payload.email,
        message: payload.message
      };

      const response = await fetch(`https://find-coach-app-8d378-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
        method: 'POST',
        body: JSON.stringify(newRequest)
      });

      const responseData =  await response.json();

      newRequest.id = responseData.name;
      newRequest.coachId =  payload.coachId

      if(!response.ok){
        const error = new Error(responseData.message || 'Failed to send');
        throw error
      };

      context.commit('addRequest', newRequest);
    },

    async loadRequest(context){
      const coachId = context.rootGetters['auth/userId'];
      const token = context.rootGetters['auth/token'];
      
      const response = await fetch(`https://find-coach-app-8d378-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` + token);

      const responseData = await response.json();

      if(!response.ok){
       const error = new Error(responseData.message || 'Failed to fetch request');
       throw error;
      }
      

      const requests = [];

      for(const key in responseData){
        const request = {
          id: key,
          coachId: coachId,
          userEmail: responseData[key].userEmail,
          message: responseData[key].message
        };
        requests.push(request);
      }

      context.commit('setRequest', requests)
    }
  },


  getters: {
    requests(state, _, _2, rootGetters){
      const coachId= rootGetters['auth/userId'];
      return state.requests.filter(req => req.coachId === coachId);
    },
    hasRequests(_, getters) {
      return getters.requests && getters.requests.length > 0;
    }
  }
}