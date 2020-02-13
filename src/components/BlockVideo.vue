<template>
    <div>
        <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/0jdSy3jRQjc?rel=0"
            allowfullscreen
        ></b-embed>

        <button class="m-3 btn btn-primary" @click="showResultats()">Voir les résulats</button>

        <div class="resultats" v-if="showResults">
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
    methods: {
        showResultats() {
            if(this.showResults) {
                this.showResults = false
            } else {
                this.showResults = true
            }

        }
    }
}</script>
<style lang="scss"></style>
