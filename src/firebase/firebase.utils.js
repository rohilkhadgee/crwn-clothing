import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCFcAKWbMXf7DTUCeP0kmpAglg-5D8V_1Q",
    authDomain: "crwn-db-7790e.firebaseapp.com",
    databaseURL: "https://crwn-db-7790e.firebaseio.com",
    projectId: "crwn-db-7790e",
    storageBucket: "crwn-db-7790e.appspot.com",
    messagingSenderId: "1036115653725",
    appId: "1:1036115653725:web:0e0ac85898bd3fab7789b4",
    measurementId: "G-167H0K9GQ4"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);

  if(!snapShot.exists){
     const {displayName, email} = userAuth;
     const createdAt = new Date();

     try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
     }catch(error){
        console.log('error creating user' , error.message);
     }
  }
  return userRef;
}


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
