import firebase from "firebase/compat";
import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD8hCiyNTZr7MMeQENwmYvhk1SJUI4zKh0",
    authDomain: "characters-app-73523.firebaseapp.com",
    projectId: "characters-app-73523",
    storageBucket: "characters-app-73523.appspot.com",
    messagingSenderId: "630160389877",
    appId: "1:630160389877:web:acdf2b6ce80a44a269b7bc",
}

let app = firebase.apps.length === 0
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

const auth = firebase.auth()
const db = getFirestore(app)

export {auth, app, db, getFirestore, doc, setDoc, getDoc}