import {SignInUseCase} from "./SignInUseCase";
import {SignUpUseCase} from "./SignUpUseCase";
import {SignInData} from "../model/SignInData";
import {SignUpData} from "../model/SignUpData";

export class LoginUseCases {

    private readonly signInUseCase: SignInUseCase
    private readonly signUpUseCase: SignUpUseCase

    constructor(
        signInUseCase: SignInUseCase,
        signUpUseCase: SignUpUseCase,
    ) {
        this.signInUseCase = signInUseCase
        this.signUpUseCase = signUpUseCase
    }

    signIn(signInData: SignInData) {
        return this.signInUseCase.execute(signInData)
    }

    signUp(signUpData: SignUpData) {
        return this.signUpUseCase.execute(signUpData)
    }
}