import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCNxiw5ZHjqwOQ4KiDo97dYR_32Dkk5kBg",
    authDomain: "project-71-21a35.firebaseapp.com",
    projectId: "project-71-21a35",
    storageBucket: "project-71-21a35.appspot.com",
    messagingSenderId: "474061014694",
    appId: "1:474061014694:web:64ba1f66948af787115667"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
