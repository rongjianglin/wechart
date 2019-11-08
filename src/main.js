import Vue from 'vue'
import App from './App.vue'

import  './plugins/axios'
import router from './plugins/router.js'
import store from './plugins/vuex'

// import state from './store/state'
Vue.config.productionTip = false
//同步localStorage与state
var local1 = window.localStorage.getItem('login')
if(local1){
  store.commit('logins',JSON.parse(local1))
}
var local2 = window.localStorage.getItem('friend')
if(local2){
  store.commit('friend',local2)
}


var local3 = window.localStorage.getItem('news')
var local31 = JSON.parse(local3)

if(local31){
   

  store.commit('sends',local31)

}

// import axios from './plugins/axios'

var vm  = new Vue({
  render: h => h(App),
 router,
 store,
 data(){
   return {
     Foot:true,
    
   }
 },
//  mounted(){
//    console.log(axios)
//  }
}).$mount('#app')

export default vm
