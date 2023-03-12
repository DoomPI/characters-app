import {Platform, SafeAreaView, StatusBar} from "react-native";

export default function AppStatusBar() {
    switch (Platform.OS) {
        case "android":
            return <StatusBar translucent={false}/>
        case "ios":
            return <SafeAreaView/>
        default:
            return null
    }
}