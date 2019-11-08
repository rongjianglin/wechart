import Vue from 'vue'
import Vuerouter from 'vue-router'

Vue.use(Vuerouter)
var Home = () => import(/* webpackChunkName: "home" */'../pages/home.vue')
import Err from '@/pages/err.vue'
var My = () => import('@/pages/my.vue')
import Login from '@/pages/login'
import Reg from '@/pages/reg'
import User from '@/pages/user'
import News from '@/pages/news'
import Search from '@/pages/search'
var routes = [{ path: '/home', component: Home },
{ path: '/my', component: My },
{ path: '/login', component: Login },
{ path: '/reg', component: Reg },
{ path: '/news/:id', component: News },
{ path: '/user', component: User },
{ path: '/', component: Home },
{ path: '/search', component: Search },

{ path: '*', component: Err }

]

var router = new Vuerouter({


    routes
})


export default router