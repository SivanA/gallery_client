import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    images: [],
  },
  mutations: {
    updateImages(state, payload) {
      state.images = payload;
    },
  },
  actions: {
    refreshImages() {
      fetchImages();
    },
  },
})

new Vue({
  render: h => h(App),
  store,
  mounted() {
    fetchImages();
    setInterval(fetchImages, 30000);
  },
}).$mount('#app')

function fetchImages() {
  axios
    .get('http://localhost:5000/get_images')
    .then(response => {
      store.commit('updateImages', response.data);
    });
}