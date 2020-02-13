<template>
    <div class="video col-12">
        <BlockVideo
                title="Championnat de France 2019"
                videoSrc="https://www.youtube.com/embed/0jdSy3jRQjc?rel=0"
        >
            <template v-slot:desc>Revivez en vidéos les meilleurs moments du tournoi</template>
        </BlockVideo>
    </div>
</template>
<script>
    import BlockVideo from '@/components/BlockVideo.vue'

    export default {
        name: 'Video',
        components: {
            BlockVideo
        }
    }
</script>

<style lang="scss">
    .home {
        color: $main-color;
    }
</style>
