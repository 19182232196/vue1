<template>
    <div id="app">
        <!-- Animation Buttons -->
        <div>
            <button @click="animateBox">Animate Box</button>
            <button @click="animateBox2">Animate Box 2</button>
            <button @click="animateBox3">Animate Box 3</button>
            <button @click="animateBox4">Animate Box 4</button>
        </div>

        <!-- Animated Boxes -->
        <div class="box-container">
            <div class="box" ref="box"></div>
            <div class="box" ref="box2"></div>
            <div class="box" ref="box3"></div>
            <div class="box" ref="box4"></div>
        </div>
    </div>
</template>

<script>
import anime from 'animejs';

export default {
    name: 'App',
    methods: {
        animateBox() {
            anime({
                targets: this.$refs.box,
                translateX: 250,
                rotate: '1turn',
                backgroundColor: '#FFF',
                duration: 2000,
                easing: 'easeInOutQuad'
            });
        },
        animateBox2() {
            anime({
                targets: this.$refs.box2,
                translateY: 150,
                rotate: '2turn',
                backgroundColor: '#FF00FF',
                duration: 1500,
                easing: 'easeInOutQuad'
            });
        },
        animateBox3() {
            anime({
                targets: this.$refs.box3,
                translateX: 150,
                translateY: -100,
                rotate: '0.5turn',
                backgroundColor: '#FFFF00',
                duration: 1500,
                easing: 'easeInOutQuad'
            });
        },
        animateBox4() {
            anime({
                targets: this.$refs.box4,
                scale: [1, 1.5],
                opacity: [0, 1],
                translateY: [
                    { value: 100, duration: 500 },
                    { value: 0, duration: 800 }
                ],
                rotate: '1turn',
                backgroundColor: '#00FFFF',
                duration: 1500,
                easing: 'easeInOutQuad'
            });
        }
    }
};
</script>

<style scoped>
#app {
    text-align: center;
    padding: 20px;
}

.box-container {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.box {
    width: 100px;
    height: 100px;
    background-color: blue;
}
</style>
