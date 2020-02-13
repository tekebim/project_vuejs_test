<template>
    <nav id="nav" class="navbar navbar-expand-lg static-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Project</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/services">Services</router-link>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
</template>

<script>
    export default {
        name: 'Navigation',
    }
</script>

<style lang="scss" scoped>
    #nav {
        background-color: $primary-color;
        .nav-item {
            margin: 0 15px;
            color: $light-color;
        }
    }
</style>
