import {LoginRepository} from "../../domain/repository/LoginRepository";
import {SignInData} from "../../domain/model/SignInData";
import {SignUpData} from "../../domain/model/SignUpData";
import {signIn, signUp} from "../datasource/network/LoginNetworkDataSource";

export class LoginRepositoryImpl implements LoginRepository {
    signIn(signInData: SignInData) {
        return signIn(signInData)
    }

    signUp(signUpData: SignUpData) {
        return signUp(signUpData)
    }

}