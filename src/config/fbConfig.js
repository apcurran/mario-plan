  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBFgVqCaefkfoaII5hk9TRooDm3GSiu18g",
    authDomain: "mario-plan-7131a.firebaseapp.com",
    databaseURL: "https://mario-plan-7131a.firebaseio.com",
    projectId: "mario-plan-7131a",
    storageBucket: "mario-plan-7131a.appspot.com",
    messagingSenderId: "459575668338",
    appId: "1:459575668338:web:5165f12b297cbef2349ceb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;