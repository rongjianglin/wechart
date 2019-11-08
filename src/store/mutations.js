

var mutations ={
    searchs:(state,payload)=>{
        state.good.push(payload)

    },
   
    err:(state,payload)=>{
        state.msg = payload
    },
    logins:(state,payload)=>{
        state.logindata = payload.data[0]
        state.s = {err:1}
        
    },
    logins2:(state,payload)=>{
        state.logindata = payload.data[0]
        state.s.err = 1
       
    },
    loads:(state,payload)=>{
        state.load =payload
    },
    loginout:(state)=>{
        window.localStorage.removeItem('login')
        state.logindata = ''
        state.s.err = 0
    },
    friend:(state,payload)=>{
        state.goods = JSON.parse(payload)
    },
    delete1:(state,payload)=>{
      
       state.goods = payload
    },
    news:(state,payload)=>{
        state.news = payload
        state.lists.niname = payload.niname
    },
    news1:(state,payload)=>{
        state.lists1 = payload
    },
    sendss:(state,payload)=>{
        
        state.li = payload
        //  state.lists1 = payload.lists1
        // state.list = payload.listarr
    },
    
    sends:(state,payload)=>{
        
        state.li = payload
        //  state.lists1 = payload.lists1
        // state.list = payload.listarr
    },
    time:(state,payload)=>{
        state.goods = payload
    }


}
export default mutations