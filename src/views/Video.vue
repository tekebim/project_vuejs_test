<template>
    <div class="video col-12">
        <h1 class="m-5">Championnat de France 2019</h1>
        <BlockVideo />
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
