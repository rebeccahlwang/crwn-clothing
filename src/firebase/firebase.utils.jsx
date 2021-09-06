import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDYZDx0xT3HJs-2QKlTLaHxLgrKM5gVKqI",
  authDomain: "crwn-db-a9125.firebaseapp.com",
  projectId: "crwn-db-a9125",
  storageBucket: "crwn-db-a9125.appspot.com",
  messagingSenderId: "563543404913",
  appId: "1:563543404913:web:3923f8266b9c1db3f886d0",
  measurementId: "G-BG1C0VXGPQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
