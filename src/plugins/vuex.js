import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
import getters from '../store/getters'
import state from '../store/state'
import mutations from '../store/mutations'
import actions from '../store/actions'

var store = new Vuex.Store({
    actions,mutations,state,getters
})


export default store