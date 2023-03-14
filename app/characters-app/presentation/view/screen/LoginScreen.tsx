import {NavigationProp} from "@react-navigation/native";
import {StackParamList} from "../Navigation";
import {loginModule} from "../../../di/CharactersAppModule";
import {LoginView} from "../../../../component/login-component/presentation/view/LoginView";
import {Logger} from "../../../../core/logger/Logger";

interface LoginScreenNavigationProps {
    navigation: NavigationProp<StackParamList, 'LoginScreen'>
}

const LOG_TAG = "LoginScreen"

export const LoginScreen = ({navigation}: LoginScreenNavigationProps) => {
    const presenter = loginModule.assemble()
    const onLoginPress = (email: string, password: string) => {
        Logger.i(LOG_TAG, `Trying to login ${email}...`)
        presenter
            .signIn(email, password)
            .then(() => navigation.navigate('CharactersListScreen'))
            .catch(error => {
                Logger.e(LOG_TAG, error.message)
                alert(error.message)
            })
    }

    const onRegisterPress = (email: string, password: string) => {
        Logger.i(LOG_TAG, `Trying to register ${email}...`)
        presenter
            .signUp(email, password)
            .then(() => navigation.navigate('CharactersListScreen'))
            .catch(error => {
                Logger.e(LOG_TAG, error.message)
                alert(error.message)
            })
    }

    return (
        <LoginView
            presenter={presenter}
            onLoginPress={onLoginPress}
            onRegisterPress={onRegisterPress}
        />
    )
}