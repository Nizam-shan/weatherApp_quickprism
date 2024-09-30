// import { initializeApp } from "firebase/app";
// import "firebase/auth";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCYDH2Xp_kwUgM1Ad8TNMNVt9RnC3lbyzQ",
//   authDomain: "bustling-folio-327510.firebaseapp.com",
//   projectId: "bustling-folio-327510",
//   storageBucket: "bustling-folio-327510.appspot.com",
//   messagingSenderId: "878857499403",
//   appId: "1:878857499403:web:1e40588aa1af8a9c17e80e",
//   measurementId: "G-KS1XVTGZ29",
// };
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);

// firebaseConfig.js (for Firebase v9 and later)
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYDH2Xp_kwUgM1Ad8TNMNVt9RnC3lbyzQ",
  authDomain: "bustling-folio-327510.firebaseapp.com",
  projectId: "bustling-folio-327510",
  storageBucket: "bustling-folio-327510.appspot.com",
  messagingSenderId: "878857499403",
  appId: "1:878857499403:web:1e40588aa1af8a9c17e80e",
  measurementId: "G-KS1XVTGZ29",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get auth instance

export {
  auth,
  // signInWithEmailAndPassword,
  // createUserWithEmailAndPassword,
  // signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
};
