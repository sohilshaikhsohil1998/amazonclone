// For Firebase JS SDK v7.20.0 and later, measurementId is optional firebase is used for hosting our website for free like a demo
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCH78rh8Ea7G5eIAIJMp9hIUHKIhlNWEuc",
    authDomain: "clone-22057.firebaseapp.com",
    databaseURL: "https://clone-22057.firebaseio.com",
    projectId: "clone-22057",
    storageBucket: "clone-22057.appspot.com",
    messagingSenderId: "379215170525",
    appId: "1:379215170525:web:56aa851693e0e6bda88434",
    measurementId: "G-KER6Z0WGXP"
  };    

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();   

export {db, auth };