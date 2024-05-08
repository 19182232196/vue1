<template>
    <div class="about">
        <img src="/public/favicon.ico" alt="关于我们" class="about-image">
        <h1>关于我们</h1>
        <p>欢迎来到我们的网站。我们致力于提供优质的服务和产品。</p>

        <img src="/public/favicon.ico" alt="关于我们" class="about-image">
        <h2>我们的使命</h2>
        <p>我们的使命是...</p>

        <img src="/public/favicon.ico" alt="关于我们" class="about-image">
        <h2>我们的团队</h2>
        <p>我们的团队由充满激情的个人组成...</p>

        <img src="/public/favicon.ico" alt="关于我们" class="about-image">
        <h2>公司历史</h2>
        <p>我们公司成立于[年]，我们公司已经成长...</p>

        <img src="/public/favicon.ico" alt="关于我们" class="about-image">
        <h2>为什么选择我们？</h2>
        <ul>
            <li>优质产品</li>
            <li>卓越的客户服务</li>
            <li>快速交付</li>
        </ul>

        <button class="back-to-top" @click="scrollToTop">返回顶部</button>

        <!-- 其他内容 -->
    </div>
</template>

<script>
export default {
    name: 'About',
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // 平滑滚动效果
            });
        }
    }
};
</script>

<style scoped>
.about {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.about-image {
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
    display: block;
}

h1,
h2 {
    color: #333;
}

p {
    line-height: 1.6;
}

ul {
    list-style-type: disc;
    margin-left: 20px;
}

.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.back-to-top:hover {
    background-color: #0056b3;
}
</style>
