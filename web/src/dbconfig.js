import Firebase from 'firebase'

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyBWXSaGoQuEU4PbFqo9rRga-n6bL8FBwv8",
    authDomain: "cash-back-9c091.firebaseapp.com",
    databaseURL: "https://cash-back-9c091.firebaseio.com",
    projectId: "cash-back-9c091",
    storageBucket: "cash-back-9c091.appspot.com",
    messagingSenderId: "357617513194",
    appId: "1:357617513194:web:0b499b66782a4d66"
};
// Initialize Firebase
let App = Firebase.initializeApp(firebaseConfig);

export const db = App.database()
