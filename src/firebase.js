import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBHRIbb0WVO1YrKkp9LfC4iLzjyREERGHM",
    authDomain: "clone-react-ed2b3.firebaseapp.com",
    databaseURL: "https://clone-react-ed2b3.firebaseio.com",
    projectId: "clone-react-ed2b3",
    storageBucket: "clone-react-ed2b3.appspot.com",
    messagingSenderId: "509600685515",
    appId: "1:509600685515:web:c01d2aacacc1f5d39baa4e",
    measurementId: "G-LMB6K5QWE2"
})

export const db = firebaseApp.firestore;

export const auth = firebaseApp.auth()