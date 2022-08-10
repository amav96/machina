import { createStore } from 'vuex';

export default createStore({
  state: {
    theme: 'dark-mode'
    // theme: 'light-mode'
  },
  mutations:{ 
    CHANGE_THEME(state){
      if(state.theme === 'dark-mode'){
        state.theme = 'light-mode'
      }else{
        state.theme = 'dark-mode'
      }
      
    }
  },
  actions: {
    changeTheme({commit}){
      commit('CHANGE_THEME');
    }
  },
 

});