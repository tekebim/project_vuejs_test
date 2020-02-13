<template>
    <b-navbar toggleable="lg" id="nav" type="dark" class="p-4" fixed="top">
        <b-navbar-brand href="/"><img src="https://image.flaticon.com/icons/svg/590/590371.svg" alt="Logo" class="icon">
            Badminton
        </b-navbar-brand>

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

        .navbar-brand {
            .icon {
                width: 30px;
                height: 30px;
                color: $dark-blue;
                margin-right: 15px;
            }
        }

        .navbar-collapse {
            &.show {
                margin-top: 15px;
            }
        }

        .navbar-toggler {
            color: $light-color;
            border: none;
        }

        .nav-item {
            margin: 0 15px;

            a {
                &.active {
                    background-color: $secondary-color;
                    @include border-radius(30px);
                    padding-left: 15px;
                    padding-right: 15px;
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
