import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBSf6bim_2de7jsq5MAeZ9FF19fAnJf0D8",
    authDomain: "e-commercesharpner.firebaseapp.com",
    projectId: "e-commercesharpner",
    storageBucket: "e-commercesharpner.appspot.com",
    messagingSenderId: "759579079854",
    appId: "1:759579079854:web:e258d308fa1d7dceb2a93f",
    measurementId: "G-W81GV1SJ3G"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };