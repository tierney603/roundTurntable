import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1
  },
  getters: {//计算属性
  
  },
  mutations: {//事件
    addCount:()=>{
      this.$store.state.count+=1
    }
  },
  actions: {//支持异步
  },
  modules: {
  }
})
