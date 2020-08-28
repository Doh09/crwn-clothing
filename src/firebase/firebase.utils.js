import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDz_gYpFjd7UbR8FREioUmJIGEy0vUirtk",
    authDomain: "crwn-db-d06c3.firebaseapp.com",
    databaseURL: "https://crwn-db-d06c3.firebaseio.com",
    projectId: "crwn-db-d06c3",
    storageBucket: "crwn-db-d06c3.appspot.com",
    messagingSenderId: "791380847124",
    appId: "1:791380847124:web:6d07df95cd9dace9d49501",
    measurementId: "G-792VR5KLS6"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;