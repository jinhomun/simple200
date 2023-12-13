import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCgWVl7lk4_ImolhBj5k3D7GulUm-bj6iI",
    authDomain: "kickoff-90.firebaseapp.com",
    projectId: "kickoff-90",
    storageBucket: "kickoff-90.appspot.com",
    messagingSenderId: "453819675284",
    appId: "1:453819675284:web:8fd10e4206cddb605aba81"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;