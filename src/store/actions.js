
import axios from 'axios'

//http://139.224.57.191:3000
var actions = {
  //添加好友
  search: ({ state, commit }, payload) => {
    axios({
      url: 'http://139.224.57.191:3000/api/friend',
      params: { username: payload }
    }).then((res) => {

      if (res.data.err == 1) {

        var data = new Date()
        var s = data.getTime()
        var b = res.data.data
         b['time'] = s
        state.goods.push(b)
        
        window.localStorage.setItem('friend', JSON.stringify(state.goods))

      }
      else {
        commit('err', '该用户不存在')
      }
    }).catch(() => {

    })

  },

  //登录
  login: ({ commit }, payload) => {
    //回执
    return axios({
      url: 'http://139.224.57.191:3000/api/login',
      method: 'post',
      data: {
        username: payload.username,
        password: payload.password
      }

    }).then((res) => {
     
      //存放到本地存储
      window.localStorage.setItem('login', JSON.stringify(res.data))

      commit('logins', { data: res.data.data })
     
      return {err: res.data.err, data: res.data.data}
      //回执数据
      
    })


  },
  //删除好友
  deletes: ({ state, commit }, payload) => {
    var locals = window.localStorage.getItem('friend')
    var locals1 = JSON.parse(locals)
    var goods = [...state.goods]
    locals1.forEach((item) => {
      if (item._id == payload) {
        locals1.splice(locals1.indexOf(item), 1)
        window.localStorage.setItem('friend', JSON.stringify(locals1))

      }
    }),

      goods.forEach((item) => {
        if (item._id == payload) {


          goods.splice(goods.indexOf(item), 1)

        }
        commit('delete1', goods)
      })

  },
  //添加发信息
  news: ({ state, commit }, payload) => {
    var states = [...state.goods]
    var lists = [...state.li]
    states.forEach(

      (item) => {
        if (item.niname == payload.dataName) {
          commit('news', item)

        }
        
      })
     
     lists.forEach((item)=>{
       
       if(item.niname == payload.dataName){
         commit('news1',item)
       }
       
     })

      


  },
  
  send: ({state}, payload) => {
    var listarr = [...state.li]
     var listobj = {...state.lists}
    if (listarr.length == 0){
        listobj.niname= payload.niname
        listobj.list.push(payload.value)
       
        listarr.push(listobj)
    }
    else{
    
      listarr.forEach((item) => {
      

        if (item.niname == payload.niname) {
            item.list.push(payload.value)
        }
      
      })
    }

    window.localStorage.setItem('news',JSON.stringify(listarr))
   
    
  },
  time :({state,commit},payload)=>{

  var  goods = [...state.goods]
  goods.forEach((item)=>{
     if(item.niname == payload.niname){
        item.time = payload.s
     }
  })

  window.localStorage.setItem('friend',JSON.stringify(goods))
     
   commit('time',goods)
  }

 }
export default actions