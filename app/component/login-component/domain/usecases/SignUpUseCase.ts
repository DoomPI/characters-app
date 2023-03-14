import {LoginRepository} from "../repository/LoginRepository";
import {SignUpData} from "../model/SignUpData";

export class SignUpUseCase {

    private readonly loginRepository: LoginRepository

    constructor(loginRepository: LoginRepository) {
        this.loginRepository = loginRepository
    }

    execute(signUpData: SignUpData) {
        return this.loginRepository.signUp(signUpData)
    }
}