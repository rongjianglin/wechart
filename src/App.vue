<template>
  <div id="app">
    
<Load v-if='$store.state.load'></Load>
 <transition  enter-active-class = "fadeIn" leave-active-class = "fadeOut">
      <router-view></router-view>
 </transition>
     <Footer v-if="$root.Foot"></Footer>
     
     
   
  </div>
</template>

<script>


import Footer from './components/footer.vue'
import Load from './components/loading'
import './plugins/axios'

export default {
  name: 'app',
   components:{
      
    
     //Reg
      Footer,
      Load

    
   },
   watch:{
     $route:function(now){
        var path  = now.path
        if( /home|my/.test(path)){
          this.$root.Foot = true

        }
       if(/user|search|reg|news|login|err/.test(path)){
          this.$root.Foot=false
       }
        
       
     },
       immediate:true
   },
  
   
  
}
</script>

<style  scoped>

#app{height:640px;width: 360px;margin:0 auto;; }

  

</style>
