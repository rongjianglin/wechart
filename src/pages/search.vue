<template>
  <div class="search">
    <div class="header">
      <span @click="$root.$router.go(-1)" class="tuei">&lt;</span>
      <span>添加朋友</span>
    </div>
    <div class="input">
      <div class="finds">
        <label for>
          <img src="../assets/img/7.jpg" />
        </label>
        <input type="text"  v-model="username"/>
        <button @click="search(username)" >搜索</button>
      </div>
      <h1>{{$store.state.msg}}</h1>
    </div>
  </div>
</template>
<script>



export default {
  data(){
    return {
      username:'',
     
      
    }
  },
   methods:{

     search(a){
            var s = confirm(this.$store.state.logindata.niname+'申请添加好友')
            if(s==true){
                  this.$store.dispatch('search',a)
            }
           
     }
   }
  
   


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

}
.tuei{font:35px/50px "" }

.input {
  width:360px;
  background: #e5e5e5;
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  overflow: hidden;
}
.finds {
  background: #fff;
  margin-top: 40px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.finds label {
  width: 30px;
  height: 30px;
}
.finds label img {
  display: block;
  width: 100%;
  height: 100%;
}
.finds button{background: cyan;width: 50px;height: 30px;}
.finds input {
  height: 40px;
  width: 270px;
}
</style>