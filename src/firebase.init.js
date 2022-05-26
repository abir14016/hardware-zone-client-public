// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0na3aQYF4kTyseaJ_G7Upy6DSq9_gSiU",
    authDomain: "hardware-zone-75216.firebaseapp.com",
    projectId: "hardware-zone-75216",
    storageBucket: "hardware-zone-75216.appspot.com",
    messagingSenderId: "287139762741",
    appId: "1:287139762741:web:0ef8eedbb14673b760d77c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;