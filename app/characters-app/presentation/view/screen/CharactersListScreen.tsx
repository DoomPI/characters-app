import {charactersListModule} from "../../../di/CharactersAppModule";
import {CharactersListView} from "../../../../component/characters-list-component/presentation/view/CharactersListView";
import {NavigationProp} from "@react-navigation/native";
import {StackParamList} from "../Navigation";
import {Character} from "../../../../common/domain/model/Character";

interface CharactersListScreenNavigationProps {
    navigation: NavigationProp<StackParamList, 'CharactersListScreen'>
}
export const CharactersListScreen = ({navigation}: CharactersListScreenNavigationProps) => {
    const presenter = charactersListModule.assemble()
    const navigateToCharacterInfoScreen = (character: Character) =>
        navigation.navigate('CharacterInfo', {
            character: character,
        })

    return (
        <CharactersListView
            presenter={presenter}
            onItemPress={navigateToCharacterInfoScreen}
        />
    )
}
