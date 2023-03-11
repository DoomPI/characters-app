import CharactersListView from "../component/characters-list-component/presentation/view/CharactersListView";
import {View} from "react-native";
import AppStatusBar from "../component/status-bar-component/presentation/view/AppStatusBar";
import {charactersListModule} from "./di/CharactersAppModule";

export default function CharactersApp() {

    const charactersListProps = charactersListModule.assembleProps()

    return (
        <View>
            <AppStatusBar/>
            <CharactersListView presenter={charactersListProps.presenter}/>
        </View>
    )
}