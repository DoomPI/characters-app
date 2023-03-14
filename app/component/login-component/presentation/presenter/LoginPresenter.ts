import {LoginUseCases} from "../../domain/usecases/LoginUseCases";
import {SignInData} from "../../domain/model/SignInData";
import {SignUpData} from "../../domain/model/SignUpData";

export class LoginPresenter {

    private readonly useCases: LoginUseCases

    constructor(useCases: LoginUseCases) {
        this.useCases = useCases
    }

    signIn(
        email: string,
        password: string,
    ) {
        const signInData = new SignInData(
            email,
            password
        )
        return this.useCases
            .signIn(signInData)
    }

    signUp(
        email: string,
        password: string,
    ) {
        const signUpData = new SignUpData(
            email,
            password,
        )
        return this.useCases
            .signUp(signUpData)
    }
}