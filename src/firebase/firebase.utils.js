import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDpfhlCI9-isW-kE-QnmuZQrdb23x45PWI",
    authDomain: "crown-db-dfa56.firebaseapp.com",
    projectId: "crown-db-dfa56",
    storageBucket: "crown-db-dfa56.appspot.com",
    messagingSenderId: "100681769540",
    appId: "1:100681769540:web:3fccdd9ef742c4a0689211",
    measurementId: "G-Q9JJDHQ46Z"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;