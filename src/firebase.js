import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq8jTYYeiakoNaUPmiui_y2wqzjns0zG4",
  authDomain: "logerapp-c7cb7.firebaseapp.com",
  projectId: "logerapp-c7cb7",
  storageBucket: "logerapp-c7cb7.firebasestorage.app",
  messagingSenderId: "696785009592",
  appId: "1:696785009592:web:414877daa30efc13ca6d4d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;

export {
    app
}