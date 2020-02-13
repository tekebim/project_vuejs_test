<template>
    <div class="home">
        <div class="block-text">
            <BlockText>
                <template v-slot:title>Texte dans le Slot Label</template>
                <template v-slot:content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, distinctio
                    fuga illum itaque nostrum perferendis quas quidem rerum vero voluptatibus! Aperiam, commodi culpa
                    cum delectus deserunt doloribus enim incidunt inventore magni nesciunt nulla, optio, tempore
                    veritatis! Animi blanditiis consequuntur hic illum odio sequi tempore ullam. A amet aut autem cum
                    deserunt dicta distinctio dolores eveniet exercitationem expedita harum inventore labore laborum
                    maiores minima minus molestiae nemo nihil nisi non optio porro praesentium quod quos recusandae
                    repellat rerum sapiente sequi similique, sit soluta sunt tempora temporibus. Delectus dolorem eius
                    eveniet ipsa ipsam non quasi, quod saepe vitae! Autem beatae nulla sapiente.
                </template>
            </BlockText>
            <div class="row d-flex justify-content-center">
                <div class="col-sm-12 col-md-6 mx-auto my-3 my-md-5">
                    <b-card no-body class="overflow-hidden d-flex align-center justify-content-center">
                        <b-row no-gutters>
                            <b-col md="12" lg="6">
                                <b-card-img :src="require('@/assets/images/affiche.png')" class="rounded-0 "></b-card-img>
                            </b-col>
                            <b-col md="12" lg="6" class="d-flex justify-content-center">
                                <b-card-body title="Le programme">
                                    <b-card-text>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe.
                                    </b-card-text>
                                    <b-link href="#" class="btn-secondary btn btn-sm">Voir les partenaires</b-link>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
                <div class="col-sm-12 col-md-6 mx-auto my-3 my-md-5">
                    <b-card no-body class="overflow-hidden d-flex align-center justify-content-center">
                        <b-row no-gutters>
                            <b-col md="12" lg="6">
                                <b-card-img :src="require('@/assets/images/partenaires.png')" class="rounded-0 "></b-card-img>
                            </b-col>
                            <b-col md="12" lg="6" class="d-flex justify-content-center">
                                <b-card-body title="Les partenaires">
                                    <b-card-text>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe.
                                    </b-card-text>
                                    <b-link href="#" class="btn-secondary btn btn-sm">Découvrir le programme</b-link>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
            </div>
        </div>

        <hr>

        <div class="row block-area">
            <div class="col-lg-6 col-12">
                <GoogleMap/>
            </div>
            <div class="col-lg-6 col-12 text-lg-left text-center p-3 p-md-5">
                <BlockText>
                    <template v-slot:title>A propos de l'événément</template>
                    <template v-slot:content>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
                            distinctio fuga illum itaque nostrum perferendis quas quidem rerum vero voluptatibus! Aperiam, commodi
                            culpa cum delectus deserunt doloribus enim incidunt invento</p>

                        <div class="event-wrapper bordered">
                            <div class="event-date"><strong>Du Jeudi 10 au Dimanche 13 Octobre 2019</strong></div>
                            <div class="event-title">Championnat de France</div>
                            <div class="event-venue">
                                Gymnase Lorem ipsum
                                <div class="address">
                                    7 rue lorem ipsum<br>
                                    ROUEN
                                </div>
                            </div>
                        </div>
                    </template>
                </BlockText>
            </div>
        </div>
    </div>
</template>

<script>
    import BlockText from '@/components/BlockText.vue';
    import GoogleMap from '@/components/GoogleMap.vue';

    export default {
        name: 'Home',
        components: {
            BlockText,
            GoogleMap,
        }
    }
</script>

<style lang="scss" scoped>
    .block-area {
        margin: 3em 0;
    }

    .block-text {
        margin: 3em 0;
    }
</style>
