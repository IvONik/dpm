import { createStore } from 'vuex'

export default createStore({
  state: {
    auth: false,
    userID: '',
  },  
  mutations: {  
    IS_AUTH(state, boolean)  {
      state.auth = boolean
    },
    SET_USERID(state, id){
      state.userID = id
    }

  },
  actions: {
  },
  getters: {    
  },  
})
