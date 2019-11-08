<template>
  <div class="user" @click="color($event)">
    <router-link to="/login" tag="button" class="login">登录</router-link>
    <router-link to="reg" class="reg" tag="button">注册</router-link>
  </div>
</template>
<script>
export default {
  methods: {
    color: function(ev) {
      var target = ev.target;

      target.style.backgroundColor = "green";
    }
  },
  
};
</script>
<style scoped>
.user {
  background: url(../assets/img/1.jpg) no-repeat;
  width: 360px;
  height: 640px;
  background-size: cover;
  margin: 0 auto;
  position: relative;
}

button {
  height: 50px;
  width: 100px;
  font: 24px/50px "";
  border-radius: 5px;
}
.login {
  position: absolute;
  bottom: 80px;
  left: 30px;
}
.reg {
  position: absolute;
  bottom: 80px;
  right: 30px;
}
</style>