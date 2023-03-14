import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    loginMainView: {
        justifyContent: "space-evenly",
        height: "100%",
        backgroundColor: "#333333",
    },

    appTitle: {
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
        color: "#FFFFFF",
    },

    textInputContainer: {
        margin: 16,
    },

    textInput: {
        margin: 4,
        padding: 16,
        fontSize: 20,
        borderRadius: 12,
        backgroundColor: "#FFFFFF",
    },

    buttonsContainer: {
        margin: 32,
    },

    loginButton: {
        alignItems: "center",
        margin: 4,
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#F46100",
    },

    loginButtonText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF",
    },

    registerButton: {
        alignItems: "center",
        margin: 4,
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#FFFFFF",
    },

    registerButtonText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#F46100",
    },
})