<template>
    <div id="app">
        <h1>Vue 3 Video Website</h1>

        <!-- Video Player -->
        <video controls :src="selectedVideo.url" v-if="selectedVideo"></video>

        <!-- Video List -->
        <div class="video-list">
            <div v-for="(video, index) in videos" :key="index" @click="selectVideo(video)">
                <img :src="video.thumbnail" :alt="video.title">
                <h3>{{ video.title }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            videos: [
                { title: 'Video 1', url: 'video.mp4', thumbnail: 'thumbnail.jpg' },
                { title: 'Video 2', url: 'video.mp4', thumbnail: 'thumbnail.jpg' },
                { title: 'Video 3', url: 'video.mp4', thumbnail: 'thumbnail.jpg' }
            ],
            selectedVideo: null
        };
    },
    methods: {
        selectVideo(video) {
            this.selectedVideo = video;
        }
    }
};
</script>

<style scoped>
#app {
    text-align: center;
}

.video-list {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.video-list img {
    width: 200px;
    cursor: pointer;
}

.video-list h3 {
    margin-top: 5px;
    font-size: 16px;
}
</style>
