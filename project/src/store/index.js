import { createStore } from 'vuex'

export default createStore({
  state: {
    auth: false,
    userID: '',
    userName: '',
  },  
  mutations: {  
    IS_AUTH(state, boolean)  {
      state.auth = boolean
    },
    SET_USERID(state, id){
      state.userID = id
    },
    SET_USER_NAME(state, name){
      state.userName = name
    }

  },
  actions: {
  },
  getters: {    
  },  
})
