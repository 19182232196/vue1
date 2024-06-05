<template>
    <div class="music-container">
        <h1>音乐</h1>
        <div class="music-list">
            <div class="music-item" v-for="(music, index) in musicList" :key="index">
                <h2>{{ music.title }}</h2>
                <p>{{ music.artist }}</p>
                <audio controls :src="music.src"></audio>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Music',
    setup() {
        const musicList = ref([
            {
                title: 'Song 1',
                artist: 'Artist 1',
                src: 'path_to_song_1.m4s'
            },
            {
                title: 'Song 2',
                artist: 'Artist 2',
                src: 'path_to_song_1.m4s'
            }
            // 你可以添加更多的歌曲
        ]);

        return {
            musicList
        };
    }
});
</script>

<style scoped>
.music-container {
    padding: 20px;
}

.music-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.music-item {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
}

.music-item h2 {
    margin: 0;
    font-size: 20px;
}

.music-item p {
    margin: 5px 0;
    font-size: 16px;
}
</style>
