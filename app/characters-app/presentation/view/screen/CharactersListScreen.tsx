import {charactersListModule} from "../../../di/CharactersAppModule";
import {CharactersListView} from "../../../../component/characters-list-component/presentation/view/CharactersListView";
import {NavigationProp} from "@react-navigation/native";
import {StackParamList} from "../Navigation";
import {Character} from "../../../../common/domain/model/Character";

export interface CharactersListScreenNavigationProps {
    navigation: NavigationProp<StackParamList, 'CharactersListScreen'>
}
export const CharactersListScreen = ({navigation}: CharactersListScreenNavigationProps) => {
    const charactersListProps = charactersListModule.assembleProps()
    const navigateToDetailsScreen = (character: Character) =>
        navigation.navigate('CharacterInfo', {
            character: character,
        })

    return (
        <CharactersListView
            presenter={charactersListProps.presenter}
            onItemPress={navigateToDetailsScreen}
        />
    )
}
