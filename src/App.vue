<template>
    <div id="app" class="main-wrapper">
        <Navigation/>
        <div class="container">
            <router-view name="video"/>
            <router-view/>
        </div>
        <div class="container-fluid">
            <router-view name="inscription"/>
        </div>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation.vue'

    export default {
        components: {
            Navigation
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $dark-blue;
    }
    .main-wrapper {
        padding-top: 88px;
    }
    *:focus {
        border:0;
        outline:none;
        box-shadow:none;
    }
</style>
