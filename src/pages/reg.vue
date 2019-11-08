<template>
  <div class="login">
    <div class="mu">
      <router-link to="/login">登录</router-link>
      <a href class="active">注册</a>
    </div>

    <div class="input">
      <div class="user">
        <label for>昵称</label>
        <input type="text" v-model="niname" />
      </div>
      <div class="user">
        <label for>账号</label>
        <input type="text" v-model="username" />
      </div>
      <div class="user">
        <label for>密码</label>
        <input type="text" v-model="password" />
      </div>

      <button class="click" @click="reg">注册</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      niname: "",
      username: "",
      password: ""
    };
  },
  methods: {
    reg() {
      this.axios({
        url: "http://139.224.57.191:3000/api/reg",
        method: "post",
        data: {
          username: this.username,
          password: this.password,
          niname: this.niname
        }
      }).then(() => {
        this.$router.push("/login");
      });
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
</style>