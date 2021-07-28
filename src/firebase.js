import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCyIi8tM7JKWAE63mcfx4dcIhmWEzGl6H0",
  authDomain: "netflix-clone-9dc9e.firebaseapp.com",
  projectId: "netflix-clone-9dc9e",
  storageBucket: "netflix-clone-9dc9e.appspot.com",
  messagingSenderId: "584713564368",
  appId: "1:584713564368:web:4687dcf3ccd0449f606ed5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
