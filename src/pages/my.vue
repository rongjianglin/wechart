<template>
  <div class="my">
    <div class="header">
      <span>微信</span>
    </div>
    <div class="background">
    <div class="news">
        <img :src='$store.state.logindata.auth_inco' alt="">
       <div class="li">
           <p>{{$store.state.logindata.niname}}</p>
           <p>微信号:
               <span>{{$store.state.logindata.username}}</span>
               </p>
       </div>
    </div>
    <div class="loginout">
         <button href class="click" @click="loginout">退出登录</button>
    </div>
    </div>
    
  </div>
</template>
<script>

export default {
  methods:{
    loginout(){
      this.axios({
        url:'http://139.224.57.191:3000/api/logout',
        method:'delete'
      }).then(()=>{
        this.$store.commit('loginout')
        this.$router.push('/user')
        
      })
      
    }

  },
  
  
  
}
</script>>

<style scoped>

.header {
  height: 50px;
  background: #000;
  display: flex;
  color: #fff;
  position: fixed;
  top: 0;
  font: 25px/2 "";
  width: 360px;
  align-items: center
}

span {
  margin-left: 10px;
  
  ;
}
.background{background: #e5e5e5;position: absolute;top:50px;bottom: 0;overflow: hidden;width: 360px}
.news{height: 60px;display: flex;background: #fff;margin-top:10px;align-items: center }
.news img{height: 50px;width: 50px;border-radius: 8px;margin: 0 10px}
.news p {margin: 0.02rem }
.loginout {
  
}


.click {
  display: flex;
  align-items:center;
  justify-content: center;
  height: 40px;
  margin-left: 30px;
  width: 300px;
  display: block;
  background-color: red;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font:18px/40px "";
  text-align: center;
  position: absolute;
  bottom: 200px;
}
</style>