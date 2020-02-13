<template>
        <b-navbar toggleable="lg" id="nav" type="dark" class="p-4" fixed="top">
            <b-navbar-brand href="/">Badminton</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="/" active>Accueil</b-nav-item>
                    <b-nav-item href="/about">A propos</b-nav-item>
                    <b-nav-item href="/services">Services</b-nav-item>
                    <b-nav-item href="/contact">Contact</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
</template>

<script>
    export default {
        name: 'Navigation',
    }
</script>

<style lang="scss" scoped>
    #nav {
        background-color: $primary-color;
        // padding: 30px;
        .nav-item {
            margin: 0 15px;
            a {
                &.router-link-exact-active {
                    color: $secondary-color;
                }
            }
        }

        a,
        .nav-item a {
            color: $light-color;
            font-weight: bold;
        }
    }
</style>
