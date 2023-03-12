import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    charactersMainView: {
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#333333"
    },

    searchInputContainer: {
        padding: 12,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#000000",
        backgroundColor: "#CA3701",
    },

    charactersListTitle: {
        flex: 3,
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFFFFF",
    },

    searchInput: {
        flex: 4,
        padding: 6,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: "#692806",
        fontSize: 16,
        color: "#FFFFFF"
    },

    charactersListItem: {
        flex: 1,
        margin: 5,
        height: 200,
        borderWidth: 1,
        borderColor: "#000000",
    },

    characterImage: {
        width: "100%",
        height: "100%",
    },
})