
import firebase from 'firebase'

require('firebase/auth');


const firebaseConfig = {
  apiKey: "AIzaSyAtCq7NY8IAhkmEB_WFcM16U5M_SNg6d2s",
  authDomain: "whatsapp-eae14.firebaseapp.com",
  projectId: "whatsapp-eae14",
  storageBucket: "whatsapp-eae14.appspot.com",
  messagingSenderId: "13156123940",
  appId: "1:13156123940:web:a3c77292391a2a9ae9dfb1"
};

// Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig)
: firebase.app();

const db = app.firestore();
const auth =app.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider };