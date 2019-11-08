<template>
  <div class="home">
    <div class="header">
      微信
      <span @click="jia">+</span>
      <router-link to ='/search' tag='p' class="jia" v-if="bl">
           <ul>
             <li>添加好友</li>
           </ul>
      </router-link>
    </div>
   <div class="mao"></div>
    <router-link  :to="'/news/'+index+ '?'+' dataName='+item.niname" tag='div' class="friend"   v-for="(item,index) in $store.state.goods" :key='item._id' >
      <img :src='item.auth_inco'/>
      <span>{{item.niname}}</span>
       <div class="decreate" @click.stop='bl2=!bl2'>
          <p>
          —     
          </p>
        </div>
         <p href="" class='delete' @click.stop="deletes(item._id)" v-if="bl2">删除好友</p>
      <span class="time">{{item.time | test}}</span>
    </router-link>

  
  </div>
</template>

<script>
import store from '../plugins/vuex'
import {mapActions} from 'vuex'
import  '../filter/filter'
export default {
  data(){
    return {
      bl:false,
      bl2:false,
      
      now :[],
    }
  },
  methods:{
    ...mapActions(['deletes']),
    jia:function(){
      this.bl = !this.bl
      
  
    },
  },
 
 //前置守卫借权
   beforeRouteEnter(to,from,next){
     
      if(store.state.s.err === 1){
        next()
      }
      else{
        next('/user')
      }
      next()

   },


 


};
</script>

<style scoped>

.header {
  height: 50px;
  background: #000;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: fixed;
  width:360px;
 

}

.header span {
  position: absolute;
  right: 20px;
  bottom:10px;
  font-size: 24px;
} 
.mao{height: 50px }
.friend {
  height: 55px;
  border-bottom: 1px solid rgb(109, 102, 102);
  padding-top: 5px;
  display: flex;
  position: relative;
  z-index: 888
 
}

.friend img {
  width: 50px;
  height: 50px;
  border-radius: 2px;
  display: block;
}
.friend span {
  float: left;
  height: 50px;
  display: block;
  color: #000;
  margin-left: 10px;
}
.friend .decreate{position: absolute;right: 10px;top:35px;z-index:999;height:20px;width: 20px;}
.friend .time{position: absolute;right:10px;top:5px;}
.friend .delete{position: absolute;right:36px;top:36px;background: red;z-index: 999}
.header .jia {
  background-color: #000;
  position: absolute;
  top: px;
  left:248px
}

</style>
