import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    charactersMainView: {
        height: "100%",
        flexDirection: 'column',
    },

    searchInput: {
        height: "7%",
        backgroundColor: "red",
        textAlignVertical: "center"
    },

    charactersList: {
        height: "93%",
    },

    characterImage: {
        flex: 1,
        margin: 5,
        height: 200,
    },
})