import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    charactersMainView: {
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#333333"
    },

    topPanel: {
        padding: 12,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#000000",
        backgroundColor: "#CA3701",
    },

    backButton: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFFFFF",
    },

    mainBackground: {
        width: "100%",
        height: "100%",
    },

    gradient: {
        width: "100%",
        height: "100%"
    },

    characterName: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFFFFF",
    },

    characterMainInfoContainer: {
        width: "100%",
        alignItems: "center",
        padding: 32,
    },

    characterImage: {
        height: 400,
        width: 300,
        margin: 8,
    },

    characterInfo: {
        padding: 16,
        fontSize: 16,
        color: "#FFFFFF",
    },
})