<template>
  <div class="login">
    <div class="mu">
      <a href class="active">登录</a>
      <router-link to="/reg">注册</router-link>
    </div>

    <div class="input">
      <div class="user">
        <label for>账号</label>
        <input type="text" v-model="username" />
      </div>
      <div class="user">
        <label for>密码</label>
        <input type="text" v-model="password" />
      </div>
      <p class="p">{{msg}}</p>
      <div>
        <button class="click" @click="login({username,password})">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      msg: ""
    };
  },
  methods: {
    login(a) {
      this.$store
        .dispatch("login", a)
        .then((res) =>

          {
            
            res.err == 1 ? this.$router.push("/home") : (this.msg = res.data)
           
          }
        )
    }
  }
};
</script>>

<style  scoped>
.mu {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0;
}
.mu a {
  text-decoration: none;
  font-size: 18px;
}
.mu a.active {
  color: green;
  border-bottom: 2px solid green;
}

.user {
  border-bottom: 1px solid green;
  overflow: hidden;
}
input {
  height: 30px;
  width: 250px;
  border: none;
  margin-top: 10px;
  outline: none;
}
label {
  margin: 0 10px;
}
.p{margin-bottom:30px;height: 2px;color:red;}
.click {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 10px auto;
  width: 300px;
  display: block;
  background-color: rgb(83, 107, 83);
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font: 18px/40px "";
  text-align: center;
}
</style>px