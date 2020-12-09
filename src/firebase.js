import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDOWxb0Qsg3dPzE4_RzyzhzmhV7Kbt7XB8",
  authDomain: "todo-app-441b1.firebaseapp.com",
  projectId: "todo-app-441b1",
  storageBucket: "todo-app-441b1.appspot.com",
  messagingSenderId: "500924320762",
  appId: "1:500924320762:web:d5af6463142f8278083243",
  measurementId: "G-E2P9YHBDQS",
});

const db = firebaseApp.firestore();

export default db;
