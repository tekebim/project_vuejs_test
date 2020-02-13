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

        <button class="m-3 btn btn-primary" @click="showResultats()">Voir les résulats</button>

        <div id="resultats" ref="resultats" v-if="showResults">
            <h2>Liste de résultats 2020</h2>
            <ul>
                <li>
                    Simple Homme : Lorem Ipsum ( Vainqueur ) - Toto ( Finaliste )
                </li>
                <li>
                    Simple Dame : Lorem Ipsum ( Vainqueur ) - Toto ( Finaliste )
                </li>
                <li>
                    Double Hommes : Lorem Ipsum ( Vainqueur ) - Toto ( Finaliste )
                </li>
                <li>
                    Double Dames : Lorem Ipsum ( Vainqueur ) - Toto ( Finaliste )
                </li>
                <li>
                    Double Mixte : Lorem Ipsum ( Vainqueur ) - Toto ( Finaliste )
                </li>
            </ul>
        </div>
    </div>
</template>
<script>export default {
    name: 'BlockVideo',
    data() {
        return {
            showResults: false
        }
    },
    props: {
        title: String,
        videoSrc: String,
    },
    methods: {
        showResultats() {
            const blResultats = this.$refs.resultats;
            console.log(blResultats)
            const offsetElTop = blResultats.offsetTop;
            if (this.showResults) {
                this.showResults = false
            } else {
                this.showResults = true
                window.scrollTo(0, offsetElTop);
            }
        }
    }
}</script>
<style lang="scss">
    #resultats {

    }
</style>
