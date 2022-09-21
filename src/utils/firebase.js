import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAJIe-l4S5JSKGJSrvWg5znPBWXyCyMcOg",
    authDomain: "aorus-ecommerce-app.firebaseapp.com",
    projectId: "aorus-ecommerce-app",
    storageBucket: "aorus-ecommerce-app.appspot.com",
    messagingSenderId: "853776626865",
    appId: "1:853776626865:web:cf436159c93a7f0eca1e90"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);