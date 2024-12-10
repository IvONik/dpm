import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/style/main.scss'
import { initializeApp } from "firebase/app"
import 'firebase/auth'
import 'firebase/database'
import { getDatabase } from "firebase/database"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: "dpmfb-3b66c",
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "547729967324",
    appId: "1:547729967324:web:ac34b0527fece5983bcc19",
    measurementId: "G-GTW2QPJK54",      
   };
   
const app = initializeApp(firebaseConfig);
const database = getDatabase();

import router from './router'
//////   DB   ////////
const db = getFirestore(app);
export{ db};


createApp(App)
.use(store)
.use(router)
.mount('#app')


