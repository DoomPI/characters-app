import {Platform, StatusBar, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    mainContentView: {
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
    },
})