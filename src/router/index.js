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
import Music from '@/views/Music.vue';
import Home from '@/views/Home.vue'; // 确保你有这个组件

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
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
        path: '/student-management/:teacherId',
        name: 'StudentManagement',
        component: StudentManagement
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
    },
    {
        path: '/music',
        name: 'Music',
        component: Music
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
