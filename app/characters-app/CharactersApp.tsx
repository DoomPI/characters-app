import {
    CharactersListView
} from "../component/characters-list-component/presentation/view/CharactersListView";
import {View} from "react-native";
import AppStatusBar from "../component/status-bar-component/presentation/view/AppStatusBar";
import {charactersListModule} from "./di/CharactersAppModule";
import {styles} from "./CharactersAppStyles";

export default function CharactersApp() {

    const charactersListProps = charactersListModule.assembleProps()

    return (
        <View>
            <AppStatusBar/>
            <View style={styles.mainContentView}>
                <CharactersListView presenter={charactersListProps.presenter}/>
            </View>
        </View>
    )
}