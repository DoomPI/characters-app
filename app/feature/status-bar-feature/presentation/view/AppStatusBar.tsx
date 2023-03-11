import {Platform, SafeAreaView, StatusBar} from "react-native";
import {styles} from "./AppStatusBarStyles";

export default function AppStatusBar() {
    switch (Platform.OS) {
        case "android":
            return <StatusBar translucent backgroundColor={styles.statusBar.backgroundColor}/>
        case "ios":
            return <SafeAreaView style={styles.statusBar}/>
        default:
            return null
    }
}