import AppStatusBar from "../../../component/status-bar-component/presentation/view/AppStatusBar";
import MainStack from "./Navigation";
import {NavigationContainer} from "@react-navigation/native";

export default function CharactersApp() {
    return (
        <NavigationContainer>
            <AppStatusBar />
            <MainStack/>
        </NavigationContainer>
    )
}