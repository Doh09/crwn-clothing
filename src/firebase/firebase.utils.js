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

  export const createUserProfileDocument = async (userAuth, additionalData) => { 
    if (!userAuth) return;
    console.log(userAuth.uid);
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapshot = await userRef.get();

    if (!snapshot.exists)
    {
      const { displayName, email} = userAuth;
      //if (userAuth.displayName === 'null')
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });

      }
      catch(err){console.log(`Error creating user ${err.message}`)}
    }
    return userRef;
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;