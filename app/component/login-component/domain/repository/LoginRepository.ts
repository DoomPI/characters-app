import {SignInData} from "../model/SignInData";
import {SignUpData} from "../model/SignUpData";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;

export interface LoginRepository {
    signIn(signInData: SignInData): Promise<UserCredential>

    signUp(signUp: SignUpData): Promise<UserCredential>
}