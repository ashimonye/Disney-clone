import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrDbICnUE9D_4PKr2P63ifY4Ts-B9BbrA",
  authDomain: "aluusi-disney-9db5d.firebaseapp.com",
  projectId: "aluusi-disney-9db5d",
  storageBucket: "aluusi-disney-9db5d.appspot.com",
  messagingSenderId: "27243960567",
  appId: "1:27243960567:web:eede11ea69976961d65bf2",
  measurementId: "G-6Q6MGBZMBC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;