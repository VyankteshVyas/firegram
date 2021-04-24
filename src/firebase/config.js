import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyARLuRPen0BUJCES626Ro8yEHQEhVEi-j0",
    authDomain: "firegram-9014c.firebaseapp.com",
    projectId: "firegram-9014c",
    storageBucket: "firegram-9014c.appspot.com",
    messagingSenderId: "547179126891",
    appId: "1:547179126891:web:5228ca8246b91166c2d12e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage=firebase.storage();
  const projectfirestore=firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export {projectStorage,projectfirestore, timestamp };
