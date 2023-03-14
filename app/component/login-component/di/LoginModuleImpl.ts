import {LoginModule} from "./LoginModule";
import {LoginUseCases} from "../domain/usecases/LoginUseCases";
import {LoginPresenter} from "../presentation/presenter/LoginPresenter";
import {LoginRepository} from "../domain/repository/LoginRepository";
import {SignInUseCase} from "../domain/usecases/SignInUseCase";
import {SignUpUseCase} from "../domain/usecases/SignUpUseCase";
import {LoginRepositoryImpl} from "../data/repository/LoginRepositoryImpl";

export class LoginModuleImpl implements LoginModule {
    assemble(): LoginPresenter {
        const loginRepository = this.provideLoginRepository()
        const signInUseCase = this.provideSignInUseCase(
            loginRepository,
        )
        const signUpUseCase = this.provideSignUpUseCase(
            loginRepository,
        )
        const useCases = this.provideLoginUseCases(
            signInUseCase,
            signUpUseCase,
        )
        return this.provideLoginPresenter(
            useCases,
        )
    }

    provideLoginPresenter(loginUseCases: LoginUseCases): LoginPresenter {
        return new LoginPresenter(
            loginUseCases,
        )
    }

    provideLoginUseCases(
        signInUseCase: SignInUseCase,
        signUpUseCase: SignUpUseCase
    ): LoginUseCases {
        return new LoginUseCases(
            signInUseCase,
            signUpUseCase,
        )
    }

    provideSignInUseCase(repository: LoginRepository): SignInUseCase {
        return new SignInUseCase(
            repository,
        )
    }

    provideSignUpUseCase(repository: LoginRepository): SignUpUseCase {
        return new SignUpUseCase(
            repository,
        )
    }

    provideLoginRepository(): LoginRepository {
        return new LoginRepositoryImpl()
    }
}