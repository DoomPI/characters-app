import {Platform, StatusBar, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "blue",
    },
    mainContentView: {
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
    }
})