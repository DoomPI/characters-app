import {NavigationProp, RouteProp} from "@react-navigation/native";
import {StackParamList} from "../Navigation";
import React from "react";
import {CharacterInfoView} from "../../../../component/character-info-component/presentation/view/CharacterInfoView";
import {View} from "react-native";
import {
    CharacterCommentsView
} from "../../../../component/character-comments-component/presentation/view/CharacterCommentsView";
import {characterCommentsModule, customCharactersListsModule} from "../../../di/CharactersAppModule";
import {
    CustomCharactersListsAddView
} from "../../../../component/custom-chatacters-lists-component/presentation/view/add/CustomCharactersListsAddView";

interface CharacterInfoScreenNavigationProps {
    navigation: NavigationProp<StackParamList, 'CharacterInfo'>
    route: RouteProp<StackParamList, 'CharacterInfo'>
}

export const CharacterInfoScreen = ({navigation, route}: CharacterInfoScreenNavigationProps) => {
    const character = route.params.character
    const navigateToCharactersListScreen = () =>
        navigation.navigate('CharactersListScreen')

    const characterCommentsPresenter = characterCommentsModule.assemble()
    const customCharactersListsAddPresenter = customCharactersListsModule.assembleAddPresenter()
    return (
        <View>
            <CharacterInfoView
                character={character}
                onBackPressed={navigateToCharactersListScreen}
            />
            <CharacterCommentsView
                characterId={character.id}
                presenter={characterCommentsPresenter}
            />
            <CustomCharactersListsAddView
                character={character}
                presenter={customCharactersListsAddPresenter}
            />
        </View>
    )
}