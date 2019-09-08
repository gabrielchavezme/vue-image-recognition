import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import firebase from 'firebase'
import { firestorePlugin } from'vuefire'
import router from './router/index'

Vue.config.productionTip = false


var config = {
  apiKey: "AIzaSyCVrgi54X7tESoWFQRuxOnO1DX9NJ3trKg",
  authDomain: "fabrica-memes-694b1.firebaseapp.com",
  databaseURL: "https://fabrica-memes-694b1.firebaseio.com",
  projectId: "fabrica-memes-694b1",
  storageBucket: "fabrica-memes-694b1.appspot.com",
  messagingSenderId: "38852195075",
  appId: "1:38852195075:web:6ab5e2f0c2e8ed83"
};

const firebaseApp = firebase.initializeApp(config)

export const firestore = firebaseApp.firestore()
export const storage = firebase.storage().ref('/images')

Vue.use(firestorePlugin)

new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
