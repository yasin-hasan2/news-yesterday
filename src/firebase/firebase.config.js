// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtYfGd9WxgdORnZAiK2dN6GYgI7UtrmDQ",
    authDomain: "news-yesterday.firebaseapp.com",
    projectId: "news-yesterday",
    storageBucket: "news-yesterday.appspot.com",
    messagingSenderId: "742137656158",
    appId: "1:742137656158:web:1229a62943ca3295aa55cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth