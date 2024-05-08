<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="logo">
        <img src="/public/favicon.ico" alt="Logo" class="logo-img">
      </router-link>
      <router-link to="/" class="nav-link">首页</router-link>
      <router-link to="/shopping" class="nav-link">购物</router-link>
      <router-link to="/videoWebsite" class="nav-link">视频网站</router-link>
      <router-link to="/anime" class="nav-link">动画</router-link>
      <router-link to="/about" class="nav-link">关于</router-link>
      <div class="dropdown">
        <button class="dropbtn" @click="toggleDropdown">用户</button>
        <div class="dropdown-content" v-show="dropdownVisible">
          <router-link to="/login" class="dropdown-link">登录</router-link>
          <router-link to="/register" class="dropdown-link">注册</router-link>
        </div>
      </div>
    </nav>

    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      dropdownVisible: false
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    }
  }
};
</script>

<style scoped>
/* Navbar styles */
.navbar {
  background-color: #007bff;
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.logo {
  margin-right: auto;
}

.logo-img {
  height: 40px;
  width: auto;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #0056b3;
}

/* Dropdown styles */
.dropdown {
  position: relative;
  margin-left: auto;
}

.dropbtn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dropbtn:hover {
  background-color: #0056b3;
}

.dropdown-content {
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;
}

.dropdown-content a:hover {
  background-color: #ddd;
}
</style>
