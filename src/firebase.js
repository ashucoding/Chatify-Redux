import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCWsZk9a3hkto-dlvS17CcNuScDv6Z1JGc",
    authDomain: "chatify-7684.firebaseapp.com",
    projectId: "chatify-7684",
    storageBucket: "chatify-7684.appspot.com",
    messagingSenderId: "559329218734",
    appId: "1:559329218734:web:f362ec172b0a1040c61d3f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
  