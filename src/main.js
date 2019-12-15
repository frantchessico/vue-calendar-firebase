import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyA8Oupv4KGl2mXQz79KM35zNslW6qCha8g",
  authDomain: "franciscoinoqueportfolio.firebaseapp.com",
  databaseURL: "https://franciscoinoqueportfolio.firebaseio.com",
  projectId: "franciscoinoqueportfolio",
  storageBucket: "franciscoinoqueportfolio.appspot.com",
  messagingSenderId: "1053727144077",
  appId: "1:1053727144077:web:350ad95394ebb47e114ac4",
  measurementId: "G-L286FW9MEX"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
