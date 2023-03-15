import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({

    mainContentView: {
        height: "100%",
        backgroundColor: "#CA3701",
        padding: 16,
        paddingTop: 16,
    },

    mainTitleContainer: {
        alignSelf: "flex-start",
        alignItems: "center",
        width: "50%",
        padding: 8,
        paddingBottom: "12%",
        backgroundColor: "#CA3701",
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
        borderColor: "#333333",
        backgroundColor: "#FFFFFF",
    },

    textInputSubmitButtonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 8,
        marginBottom: 8,
    },

    customListItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        marginTop: 8,
        marginBottom: 8,
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#FFFFFF"
    },

    customListItemNameText: {
        alignSelf: "flex-start",
        alignItems: "center",
        textAlignVertical: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFFFFF",
    },

    customListAddButton: {
        alignSelf: "flex-end",
        alignItems: "center",
        padding: 8,
        backgroundColor: "#333333",
        borderRadius: 12,
    },

    customListAddButtonText: {
        textAlignVertical: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFFFFF",
    },
})