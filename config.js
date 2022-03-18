import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAbPPLZ9I2leRy-RYbP-_ZIaBTxA8NwRmo",
  authDomain: "class-test-cbec9.firebaseapp.com",
  databaseURL: "https://class-test-cbec9-default-rtdb.firebaseio.com",
  projectId: "class-test-cbec9",
  storageBucket: "class-test-cbec9.appspot.com",
  messagingSenderId: "809329346083",
  appId: "1:809329346083:web:d2dda3c21229ee66401396"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
