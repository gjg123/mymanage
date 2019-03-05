import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import tagsView from './modules/tagsView'
import getters from './getters'
import app from './modules/app'
Vue.use(Vuex)

//export default new Vuex.Store({
//modules: {
//	app,
//  user,
//  tagsView
//},
//getters
//})



const store = new Vuex.Store({
 state : {
  count: 1,
  name: 'dkr',
  sex: '男',
  from: 'china'
},
   
  modules: {
    app,
    tagsView,
    user
  },
  getters
})

export default store