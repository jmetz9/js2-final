import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBA5JIr2JhTp-5Buv4XwfhfGjSih6gpt2w",
    authDomain: "js2-demo-50e31.firebaseapp.com",
    projectId: "js2-demo-50e31",
    storageBucket: "js2-demo-50e31.appspot.com",
    messagingSenderId: "220017764999",
    appId: "1:220017764999:web:165326674eb0cfe1936622"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref();

export {firebase, db, auth, storage};