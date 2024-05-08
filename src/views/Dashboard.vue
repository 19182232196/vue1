<template>
    <div>
        <h2>Dashboard</h2>
        <!-- 显示登录成功后的链接 -->
        <router-link v-if="isLoggedIn" to="/profile">My Profile</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: false // 登录状态，默认为未登录
        };
    },
    mounted() {
        // 假设你有一个方法用于处理登录逻辑，当登录成功时设置 isLoggedIn 为 true
        // 例如，在登录成功后调用 loginSuccess 方法
        this.loginSuccess();
    },
    methods: {
        loginSuccess() {
            // 登录成功后调用此方法
            this.isLoggedIn = true;
        }
    }
};
</script>

