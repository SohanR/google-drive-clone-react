import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJTWngsRim_Lghzb5ij5cK063w8JzQ67Y",
    authDomain: "drive-clone-f9bfe.firebaseapp.com",
    projectId: "drive-clone-f9bfe",
    storageBucket: "drive-clone-f9bfe.appspot.com",
    messagingSenderId: "148561587632",
    appId: "1:148561587632:web:1b766c3d141c628f613a75"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage()
  const db = firebaseApp.firestore()

  export { auth, provider, db, storage };
