<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="logo">
        <img src="/public/favicon.ico" alt="Logo" class="logo-img" />
      </router-link>
      <router-link to="/" class="nav-link">首页</router-link>
      <router-link to="/shopping" class="nav-link">购物</router-link>
      <router-link to="/videoWebsite" class="nav-link">视频网站</router-link>
      <router-link to="/anime" class="nav-link">动画</router-link>
      <router-link to="/music" class="nav-link">音乐</router-link>
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
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img :src="image" class="carousel-image" />
        </swiper-slide>
        <div class="swiper-button-prev" @click="prevSlide">
          <i class="fas fa-chevron-left"></i>
        </div>
        <div class="swiper-button-next" @click="nextSlide">
          <i class="fas fa-chevron-right"></i>
        </div>
      </swiper>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation'; // 导入导航按钮样式
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';

import image1 from '@/assets/product1.jpg';
import image2 from '@/assets/product2.jpg';
import image3 from '@/assets/product3.jpg';

SwiperCore.use([Pagination, Navigation, Autoplay]);

export default {
  name: 'App',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      dropdownVisible: false,
      swiperOption: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      images: [image1, image2, image3],
    };
  },
  methods: {
    nextSlide() {
      if (this.$refs.mySwiper && this.$refs.mySwiper.swiper) {
        this.$refs.mySwiper.swiper.slideNext();
      }
    },
    prevSlide() {
      if (this.$refs.mySwiper && this.$refs.mySwiper.swiper) {
        this.$refs.mySwiper.swiper.slidePrev();
      }
    },
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
  },
};
</script>

<style scoped>
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

.carousel-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background-color: rgba(255, 255, 255, 0.7);
}

.swiper-button-prev i,
.swiper-button-next i {
  font-size: 20px;
  color: #333;
}
</style>
