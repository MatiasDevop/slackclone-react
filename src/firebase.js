// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCUUjObVa6cRW0ilaIcDeHkXzo4igah008",
    authDomain: "slack-clone-75d98.firebaseapp.com",
    projectId: "slack-clone-75d98",
    storageBucket: "slack-clone-75d98.appspot.com",
    messagingSenderId: "632188788871",
    appId: "1:632188788871:web:03fcf4017ce27c2c9a9822",
    measurementId: "G-VXEQ6006BP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
  