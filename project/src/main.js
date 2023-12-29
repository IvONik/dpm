import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/main.scss'
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAAelsIo36Cz53SC_g78oSPWWrz7OZKY90",
    authDomain: "dpmfb-3b66c.firebaseapp.com",
    projectId: "dpmfb-3b66c",
    storageBucket: "dpmfb-3b66c.appspot.com",
    messagingSenderId: "547729967324",
    appId: "1:547729967324:web:ac34b0527fece5983bcc19",
    measurementId: "G-GTW2QPJK54"
   };
   
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// firebase.initializeApp({
//     apiKey: "AIzaSyAAelsIo36Cz53SC_g78oSPWWrz7OZKY90",
//     authDomain: "dpmfb-3b66c.firebaseapp.com",
//     projectId: "dpmfb-3b66c",
//     storageBucket: "dpmfb-3b66c.appspot.com",
//     messagingSenderId: "547729967324",
//     appId: "1:547729967324:web:ac34b0527fece5983bcc19",
//     measurementId: "G-GTW2QPJK54"
// })
// let app
// firebase.auth().onAuthStateChanged(() => {
//     if (!app){
//         createApp(App).use(store).use(router).mount('#app')
//     }
    
// })
createApp(App).use(store).use(router).mount('#app')
