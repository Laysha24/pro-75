import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBLXfrj2tuuxFk8RZEJtajOkVBg-BI1t9o",
  authDomain: "e-ride-2947d.firebaseapp.com",
  projectId: "e-ride-2947d",
  storageBucket: "e-ride-2947d.appspot.com",
  messagingSenderId: "926135765084",
  appId: "1:926135765084:web:42a493f8eb10cafc38fe99"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
