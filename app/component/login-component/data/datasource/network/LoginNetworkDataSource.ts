import {SignInData} from "../../../domain/model/SignInData";
import {SignUpData} from "../../../domain/model/SignUpData";
import {auth} from "./firebaseConfig";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;
import {Logger} from "../../../../../core/logger/Logger";

const LOG_TAG = "LoginNetworkDataSource"
export function signIn(signInData: SignInData): Promise<UserCredential> {
    const email = signInData.email
    const password = signInData.password
    return auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            Logger.i(LOG_TAG, `Signed in with: ${userCredentials.user?.email}`)
            return userCredentials
        })
}

export function signUp(signUpData: SignUpData): Promise<UserCredential> {
    const email = signUpData.email
    const password = signUpData.password
    return auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            Logger.i(LOG_TAG, `Signed up with: ${userCredentials.user?.email}`)
            return userCredentials
        })
}