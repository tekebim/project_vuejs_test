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
                <div class="col-sm-12 col-md-6">
                    <b-card
                            title="Card Title"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2"
                    >
                    </b-card>
                </div>
                <div class="col-sm-12 col-md-6">
                    <b-card
                            title="Card Title"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2"
                    >
                    </b-card>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 col-12">
                <GoogleMap/>
            </div>
            <div class="col-lg-6 col-12">
                <BlockText>
                    <template v-slot:title>Lorem ipsum</template>
                    <template v-slot:content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, distinctio
                        fuga illum itaque nostrum perferendis quas quidem rerum vero voluptatibus! Aperiam, commodi culpa
                        cum delectus deserunt doloribus enim incidunt invento
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
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

<style lang="scss">
    .home {
        color: $main-color;
    }
    .block-newsletter {
        background-color: $dark-blue;
    }
</style>
