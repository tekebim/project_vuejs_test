<template>
    <div id="block-map">
        <GmapMap ref="mapRef"
                 :center="{lat:10, lng:10}"
                 :zoom="12"
                 map-type-id="terrain"
        >
            <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.geometry.location"
                    :title="m.name"
                    :clickable="true"
                    :draggable="false   "
                    @click="openInfoWindowTemplate(m)"
            >
            </GmapMarker>
            <GmapInfoWindow
                    :options="{maxWidth: 300}"
                    :position="infoWindow.position"
                    :opened="infoWindow.open"
                    @closeclick="infoWindow.open=false">
                <!-- ici on utilise v-html et pas {{ }} car il est possible qu'on balance du html dans la div et qu'on souhaite l'interpreter -->
                <div v-html="infoWindow.template"></div>
            </GmapInfoWindow>
        </GmapMap>
    </div>
</template>

<script>
    export default {
        name: 'GoogleMap',
        data() {
            return {
                keyword: 'paris',
                markers: [],
                infoWindow: {
                    position: {lat: 0, lng: 0},
                    open: false,
                    template: ''
                }
            }
        },
        methods: {
            searchNearBy() {
                this.$refs.mapRef.$mapPromise.then((map) => {
                    /* eslint-disable no-undef */
                    // map.panTo({lat: 49.4289314, lng: 1.0762552})
                    map.panTo({lat: 48.864716, lng: 2.349014})
                    /* eslint-disable no-undef */
                    let placesService = new google.maps.places.PlacesService(map)
                    placesService.nearbySearch({
                        location: {lat: 48.864716, lng: 2.349014},
                        name: this.keyword,
                        radius: 1000,
                        // types: ['store', 'restaurant']
                    }, (results) => {
                        this.markers = results
                    })
                })
            },
            openInfoWindowTemplate(item) {
                this.infoWindow.template = '<img alt="Vue logo" src="' + item.icon + '"><h1>' + item.name + '</h1>'
                this.infoWindow.position = item.geometry.location
                this.infoWindow.open = true
            }
        },
        mounted() {
            this.searchNearBy()
        }
    }
</script>
<style lang="scss">
    .vue-map-container {
        width: 100%;
        /*
        @include media-breakpoint-up(sm) {
            height: 30em;
        }
        @include media-breakpoint-down(sm) {
            height: 15em;
        }
        */
    }
</style>
