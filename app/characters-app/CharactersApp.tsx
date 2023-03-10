import CharactersListView from "../feature/characters-list-feature/presentation/view/CharactersListView";
import {CharactersListRepository} from "../feature/characters-list-feature/domain/repository/CharactersListRepository";
import {
    CharactersListRepositoryImpl
} from "../feature/characters-list-feature/data/repository/CharactersListRepositoryImpl";
import {CharactersListUseCases} from "../feature/characters-list-feature/domain/usecases/CharactersListUseCases";
import {GetCharactersListUseCase} from "../feature/characters-list-feature/domain/usecases/GetCharactersListUseCase";
import {SearchCharacterUseCase} from "../feature/characters-list-feature/domain/usecases/SearchCharacterUseCase";
import {
    CharactersListPresenter
} from "../feature/characters-list-feature/presentation/presenter/CharactersListPresenter";
import {SafeAreaView, StatusBar, View} from "react-native";
import {styles} from "./CharactersAppStyles";
import {Platform} from "react-native";

export default function CharactersApp() {
    const charactersRepository: CharactersListRepository = new CharactersListRepositoryImpl()
    const useCases = new CharactersListUseCases(
        new GetCharactersListUseCase(charactersRepository),
        new SearchCharacterUseCase(charactersRepository),
    )
    const presenter = new CharactersListPresenter(
        useCases,
    )

    const AppStatusBar = () => {
        switch (Platform.OS) {
            case "android":
                return <StatusBar translucent backgroundColor={styles.statusBar.backgroundColor}/>
            case "ios":
                return <SafeAreaView style={styles.statusBar}/>
            default:
                return null
        }
    }

    return (
        <View>
            <AppStatusBar />
            <View style={styles.mainContentView}>
                <CharactersListView presenter={presenter} />
            </View>
        </View>
    )
}