import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBO1X2SneEsPS-_mmiUP-q30SoZrwRFRJM",
    authDomain: "share-videos-46d4c.firebaseapp.com",
    projectId: "share-videos-46d4c",
    storageBucket: "share-videos-46d4c.appspot.com",
    messagingSenderId: "575825995452",
    appId: "1:575825995452:web:b8271ca2feeb262b1fd2b9"
  };
  // Initialize Firebase
  const fb =firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();