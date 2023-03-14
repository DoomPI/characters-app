import React from "react";
import {LoginViewProps} from "./LoginViewProps";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./LoginViewStyles";
import {LoginViewState} from "./LoginViewState";

export class LoginView extends React.Component<LoginViewProps, LoginViewState> {

    constructor(props: LoginViewProps) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }

    render() {
        return (
            <View style={styles.loginMainView}>

                <Text style={styles.appTitle}>Characters app</Text>

                <View>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            autoCapitalize={"none"}
                            placeholder={"Email"}
                            onBlur={(event) => {
                                this.setState({
                                    email: event.nativeEvent.text.trim(),
                                })
                            }}
                        />
                        <TextInput
                            style={styles.textInput}
                            autoCapitalize={"none"}
                            secureTextEntry={true}
                            placeholder={"Password"}
                            onBlur={(event) => {
                                this.setState({
                                    password: event.nativeEvent.text.trim(),
                                })
                            }}
                        />
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={() => {
                                const email = this.state.email
                                const password = this.state.password
                                this.props.onLoginPress(email, password)
                            }}
                        >
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.registerButton}
                            onPress={() => {
                                const email = this.state.email
                                const password = this.state.password
                                this.props.onRegisterPress(email, password)
                            }}
                        >
                            <Text style={styles.registerButtonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}