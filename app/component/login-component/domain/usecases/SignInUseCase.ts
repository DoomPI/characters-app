import {LoginRepository} from "../repository/LoginRepository";
import {SignInData} from "../model/SignInData";

export class SignInUseCase {
    private readonly loginRepository: LoginRepository

    constructor(loginRepository: LoginRepository) {
        this.loginRepository = loginRepository
    }

    execute(signInData: SignInData) {
        return this.loginRepository.signIn(signInData)
    }
}