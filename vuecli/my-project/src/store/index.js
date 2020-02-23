import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const moduleA = {
  state:{
    username:"小明"
  }
}
export default new Vuex.Store({
  state: {
    count:10
  },
  mutations: {
    add(state){
      ++state.count
    },
    reduce(state){
      --state.count
    }
  },
  getters:{
    newCount(state){
      return state.count+100;
    }
  },
  actions: {
    addAction({commit}){
      commit("add");
    }
  },
  modules: {
    users:moduleA
  }
})
