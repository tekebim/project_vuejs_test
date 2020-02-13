<template>
    <div class="video col-lg-6 col-12">
        <h1>Video</h1>
        <BlockVideo/>
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
