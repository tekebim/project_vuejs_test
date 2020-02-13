<template>
    <div>
        <div class="block__title m-4 m-sm-5">
            <h1>{{ this.title }}</h1>
            <slot name="desc">
                <span></span>
            </slot>
        </div>
        <b-embed
                type="iframe"
                aspect="16by9"
                :src="this.videoSrc"
                allowfullscreen
        ></b-embed>

        <button class="m-3 btn btn-secondary" @click="showBlockResults()" v-if="!showResults">Voir le tableau des résultats</button>
        <button class="m-3 btn btn-secondary" @click="hideBlockResults()" v-else>Masquer les résultats</button>

        <BlockResultats id="resultats" ref="resultats" v-if="showResults" class="table-responsive"/>

        <hr>

    </div>
</template>
<script>
    import BlockResultats from '@/components/BlockResultats.vue';

    export default {
        name: 'BlockVideo',
        components: {
            BlockResultats
        },
        data() {
            return {
                showResults: false,
                button: {
                    defaultLabel: 'Voir le tableau des résultats'
                }
            }
        },
        props: {
            title: String,
            videoSrc: String,
        },
        methods: {
            showBlockResults() {
                // const blResultats = this.$refs.resultats;
                // const offsetElTop = blResultats.offsetTop;
                this.showResults = true
                // window.scrollTo(0, offsetElTop);
            },
            hideBlockResults() {
                this.showResults = false
            }
        }
    }</script>
<style lang="scss" scoped>
    #resultats {

    }
</style>
