
  // Your web app's Firebase configuration
  
  import firebase from 'firebase'
  
  const firebaseConfig = {
    apiKey: "AIzaSyBqi0aAg8mmVGn_ADejoL2jw37MjgtJpvU",
    authDomain: "fun-food-friends-1eb40.firebaseapp.com",
    databaseURL: "https://fun-food-friends-1eb40.firebaseio.com",
    projectId: "fun-food-friends-1eb40",
    storageBucket: "fun-food-friends-1eb40.appspot.com",
    messagingSenderId: "371021548171",
    // appId: "1:371021548171:web:02fe3041d8380044"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  
  export default firebase;