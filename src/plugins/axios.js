import Vue from 'vue';
import axios from 'axios';

import store from '../plugins/vuex'
Vue.prototype.axios = axios;//实例属性
window.axios = axios; //全局API
//添加一个请求的拦截
axios.interceptors.request.use(function (config) {	    
    //设置通用请求头  
    //设置通用 baseUrl  http://api.douban.com
    //强制设置提交方式 post
    // config == 配置               // axios({配置})
    // config.headers = {'X-Requested-With': 'XMLHttpRequest'}

    //修改bLoading = true
    // this.$root.bLoading=true;  ×
   
   store.commit('loads',true)

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (response) {
    // Do something with response data
   
   store.commit('loads',false);
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });


export default axios



