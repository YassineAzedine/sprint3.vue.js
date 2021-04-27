import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDtRGRLUXs1UrwaoeU3hB7vOdywnnKXLos",
  authDomain: "projecte-a833f.firebaseapp.com",
  databaseURL: "https://projecte-a833f-default-rtdb.firebaseio.com",
  projectId: "projecte-a833f",
  storageBucket: "projecte-a833f.appspot.com",
  messagingSenderId: "322499883102",
  appId: "1:322499883102:web:2625a2c4867b88efba44cf",
  measurementId: "G-R4ELG028P9"
 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
