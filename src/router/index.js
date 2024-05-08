// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Profile from '@/views/Profile.vue';
import StudentManagement from '@/views/StudentManagement.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import ShoppingCart from '@/views/ShoppingCart.vue';
import VideoWebsite from '@/views/VideoWebsite.vue';
import Anime from '@/views/Anime.vue';
import About from '@/views/About.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/student-management/:teacherId', // 添加 StudentManagement 的路由路径，并使用动态参数 teacherId
        name: 'StudentManagement',
        component: StudentManagement // 关联 StudentManagement 组件
    },
    {
        path: '/shopping',
        name: 'Shopping',
        component: ShoppingCart
    },
    {
        path: '/videoWebsite',
        name: 'VideoWebsite',
        component: VideoWebsite
    },
    {
        path: '/anime',
        name: 'Anime',
        component: Anime
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
