import {LoginPresenter} from "../presenter/LoginPresenter";

export type LoginViewProps = {
    presenter: LoginPresenter,

    onLoginPress: (email: string, password: string) => void

    onRegisterPress: (email: string, password: string) => void
}