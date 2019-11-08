<template functional>
<div class="foot">
      <div class="footer">
      <ul class="ul">
        <router-link to='/home' tag= 'li' class="home">
          <span></span>
        </router-link>
        <li class="write">
          <span href></span>
        </li>
        <li class="find">
          <span></span>
        </li>
        <router-link to='/my' tag= 'li' class="my">
          <span></span>
        </router-link>
      </ul>
    </div>


</div>
    
</template>
<style scoped>
.foot{
  width: 360px;
  height: 80px;
  background: #fff;
  position: fixed;
  z-index: 999;
 
  bottom:0px;
  border-top: 1px solid #9e9a95;
}
.footer .ul {
  width: 300px;
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.footer .ul li {
  float: left;
  list-style: none;
}
.footer .ul li a {
  display: block;
  width: 100%;
  height: 100%;
}
.footer .ul li span {
  display: block;
  width: 100%;
  height: 100%;
}

.footer .ul .home {
  width: 42px;
  height: 65px;
  background: url(../assets/img/3.jpg) no-repeat 0 0;
  background-size: 100%;
}
.footer .ul .write {
  width: 55px;
  height: 65px;
  background: url(../assets/img/2.jpg) no-repeat 0 0;
  background-size: 100%;
}
.footer .ul .find {
  width: 47px;
  height: 63px;
  background: url(../assets/img/4.jpg) no-repeat 0 0;
  background-size: 100%;
}
.footer .ul .my {
  width: 44px;
  height: 66px;
  background: url(../assets/img/5.jpg) no-repeat 0 0;
  background-size: 100%;
}

</style>