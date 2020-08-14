import firebase from "firebase"


var firebaseConfig = {
    apiKey: "AIzaSyChUZJSo2fkhRkf7-CaOn2uQRII43KLY2o",
    authDomain: "bankersapp-9a41e.firebaseapp.com",
    databaseURL: "https://bankersapp-9a41e.firebaseio.com",
    projectId: "bankersapp-9a41e",
    storageBucket: "bankersapp-9a41e.appspot.com",
    messagingSenderId: "862438473323",
    appId: "1:862438473323:web:cc2d742adff68344753b2e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase