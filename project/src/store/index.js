import { createStore } from 'vuex'

export default createStore({
  state: {
    auth: false,
    userID: '',
    userName: '',
    lightTheme: false,
    location: 'ru',
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
    },
    TOGGLE_THEME(state ){
      state.lightTheme = !state.lightTheme
    },
     SET_LOCALE(state, location ){
      state.location = location
    }
  },
  actions: {
    toggleTheme({ commit }) {
      commit('TOGGLE_THEME');
    },
  },
  getters: {   
    currentTheme: state => (state.lightTheme ? 'light' : 'dark'), 
    location: state => state.location,    
  },  
})
