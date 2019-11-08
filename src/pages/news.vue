<template>
  <div class="news">
    <div class="header">
      <span @click="$root.$router.go(-1)" class="tuei">&lt;</span>
      <span>{{$store.state.lists1.niname}}</span>
    </div>
    
    <div class="div">
      <ul v-for="(item,index) in $store.state.lists1.list" :key="index+1">
        <li>{{item}}<img :src='$store.state.logindata.auth_inco'></li>
      </ul>
    </div>
 
    <div class="send">
      <input type="text"  v-model="values" />
      <button @click="send">发送</button>
    </div>
  </div>
</template>
<script>
 import {mapGetters} from 'vuex'
 import store from '../plugins/vuex'
export default {

  data() {
    return {
      
      values:'',
      now:''
    }
  },
 
  methods:{
    send(){
     
      this.$store.dispatch('send',{value:this.values,niname:this.niname})
    }
  },
beforeCreate(){
 
    store.dispatch('news',this.$route.query)
   
  },
beforeDestroy(){
  var data = new Date()
  var s = data.getTime()
  this.$store.dispatch('time',{s,niname:store.state.lists1.niname})

  
},


  computed:{
    ...mapGetters(['niname'])
  }
 
};

  

</script>>

<style scoped>
.header {
  height: 50px;
  background: rgb(196, 193, 193);
  display: flex;
  color: #000;
  position: fixed;
  top: 0;
  font: 25px/2 "";
  width: 360px;
  display: flex;
  align-items: center
}
span {
  margin-left: 10px;
}
.tuei{font:35px/50px "" }
.div {
  margin-top: 50px;
}
ul {
  overflow: hidden;
}
li {
  margin: 10px 10px;
  float: right;
  display: flex;
  justify-content: right;
  align-items: center
}
li img{display: block;height: 20px;width:20px;margin-left: 5px}
.send {
  position: fixed;
  bottom:1px;
  width: 360px;
  background: rgb(196, 193, 193);
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.send input {
  background: #fff;
  height: 30px;
  width: 250px;
  margin-left: 10px;
  margin-right: 10px;
  
}
.send button{background: green;height:30px;width: 50px;text-align: center; }
</style>>
