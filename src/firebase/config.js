import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCGNfWpXP4r_882KULrmEt4ihVJygUYdcA",
    authDomain: "olxapp-93f04.firebaseapp.com",
    projectId: "olxapp-93f04",
    storageBucket: "olxapp-93f04.appspot.com",
    messagingSenderId: "235132965515",
    appId: "1:235132965515:web:1acff56201545ff5e4ba8e",
    measurementId: "G-6NMMKHZ9D9"
  };

  export default firebase.initializeApp(firebaseConfig)