import {LoginUseCases} from "../domain/usecases/LoginUseCases";
import {LoginPresenter} from "../presentation/presenter/LoginPresenter";
import {SignInUseCase} from "../domain/usecases/SignInUseCase";
import {SignUpUseCase} from "../domain/usecases/SignUpUseCase";
import {LoginRepository} from "../domain/repository/LoginRepository";

export interface LoginModule {
    assemble(): LoginPresenter

    provideLoginPresenter(
        loginUseCases: LoginUseCases,
    ): LoginPresenter

    provideLoginUseCases(
        signInUseCase: SignInUseCase,
        signUpUseCase: SignUpUseCase,
    ): LoginUseCases

    provideSignInUseCase(
        repository: LoginRepository,
    ): SignInUseCase

    provideSignUpUseCase(
        repository: LoginRepository,
    ): SignUpUseCase
    provideLoginRepository(): LoginRepository
}