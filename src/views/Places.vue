<template>
    <div class="page">
        <div id="nav" class="menu">
            <router-link to="/profile">Perfil</router-link>
            <a @click.prevent="logout()" title="Sair" class="logout">Sair <i class="fas fa-sign-out-alt"></i></a>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-12 text-center align-center mb-3">
                            <img class="d-block mx-auto mb-4" src="../assets/logo.svg" alt="" width="72" height="72">    
                            <h2>Localização <i class="fa fa-map" aria-hidden="true"></i></h2>
                        </div>

                        <div class="col-md-7">
                            <gmap-autocomplete @place_changed="setPlace" placeholder="Adicionar localização" class="form-control"></gmap-autocomplete>
                        </div>
                        <div class="col-md-5">
                            <button @click="addMarker" class="col-md-12 btn btn-primary d-block mx-auto">Adicionar rota</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 mt-3">
                    <gmap-map :center="center" :zoom="12" class="maps">
                        <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center=m.position">
                        </gmap-marker>
                    </gmap-map>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Places",
        data() {
            return {
                center: {
                    lat: -8.05428,
                    lng: -34.8813
                },
                markers: [],
                places: [],
                currentPlace: null
            };
        },

        mounted() {
            this.geolocate();
        },

        methods: {
            setPlace(place) {
                this.currentPlace = place;
            },
            addMarker() {
                if (this.currentPlace) {
                    const marker = {
                        lat: this.currentPlace.geometry.location.lat(),
                        lng: this.currentPlace.geometry.location.lng()
                    };
                    this.markers.push({
                        position: marker
                    });
                    this.places.push(this.currentPlace);
                    this.center = marker;
                    this.currentPlace = null;
                }
            },
            geolocate: function () {
                navigator.geolocation.getCurrentPosition(position => {
                    this.center = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                });
            },
            logout () {
                localStorage.removeItem('auth-token')
                this.$router.push({ path: '/' })
            }
        }
    };
</script>