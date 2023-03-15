import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({

    mainContentView: {
        height: "100%",
        backgroundColor: "#333333",
        padding: 16,
        paddingTop: 16,
    },

    mainTitleContainer: {
        alignItems: "center",
        width: "50%",
        padding: 8,
        backgroundColor: "#333333",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },

    mainTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF",
    },

    textInput: {
        marginBottom: 8,
        padding: 16,
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 12,
        borderColor: "#F46100",
        backgroundColor: "#FFFFFF",
    },

    textInputSubmitButtonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 8,
        marginBottom: 8,
    },

    textInputSubmitButton: {
        alignItems: "center",
        padding: 8,
        backgroundColor: "#F46100",
        borderRadius: 12,
    },

    textInputSubmitButtonText: {
        textAlignVertical: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFFFFF",
    },

    commentTextContainer: {
        flex: 1,
        marginTop: 8,
        marginBottom: 8,
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
    },

    commentText: {
        textAlign: "left",
        fontSize: 16,
        color: "#FFFFFF",
    },
})