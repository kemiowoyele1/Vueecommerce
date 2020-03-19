import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
// import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyBNwj9Fnm8kDeW9qF8hxLLn1bDViQC8NV4",
//     authDomain: "vuetube-11842.firebaseapp.com",
//     databaseURL: "https://vuetube-11842.firebaseio.com",
//     projectId: "vuetube-11842",
//     storageBucket: "vuetube-11842.appspot.com",
//     messagingSenderId: "782642504562",
//     appId: "1:782642504562:web:684832ab24d3a63572b3eb",
//     measurementId: "G-C4QECWGHSV"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')