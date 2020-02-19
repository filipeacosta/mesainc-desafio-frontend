import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from "vue2-google-maps";
import './assets/scss/app.scss'

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCOjooZA5PxZAQairoPi3p1Gyb8sddoF9A",
    libraries: "places" // necessary for places input
  }
});

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
