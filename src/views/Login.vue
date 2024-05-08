<template>
  <div class="login-container">
    <h2>登录</h2>
    <!-- 登录表单 -->
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <input type="text" v-model="username" placeholder="Username" class="form-input">
      </div>
      <div class="form-group">
        <input type="password" v-model="password" placeholder="Password" class="form-input">
      </div>
      <button type="submit" class="login-button">登录</button>
    </form>

    <!-- 跳转到注册页面的链接 -->
    <router-link to="/register" class="register-link">没有用户</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      accounts: [ // 存储账号密码信息的数组
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
        { username: 'user3', password: 'password3' }
        // 可以添加更多的账号密码信息
      ]
    };
  },
  methods: {
    login() {
      // 验证用户名和密码是否匹配
      const isValidUser = this.accounts.some(account => {
        return account.username === this.username && account.password === this.password;
      });

      if (isValidUser) {
        // 登录成功后的操作，比如跳转到另一个页面
        this.$router.push({ name: 'Dashboard' });
      } else {
        // 登录失败，可以显示错误信息或采取其他操作
        console.error('Invalid username or password');
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-form {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

.login-button {
  width: 100%;
  padding: 10px;
  font-size: 18px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.register-link {
  display: block;
  text-align: center;
  color: #007bff;
  text-decoration: none;
  margin-top: 10px;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
