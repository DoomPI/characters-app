import {NavigationProp, RouteProp} from "@react-navigation/native";
import {StackParamList} from "../Navigation";
import React from "react";
import {CharacterInfoView} from "../../../../component/character-info-component/presentation/view/CharacterInfoView";

interface CharacterInfoScreenNavigationProps {
    navigation: NavigationProp<StackParamList, 'CharacterInfo'>
    route: RouteProp<StackParamList, 'CharacterInfo'>
}

export const CharacterInfoScreen = ({navigation, route}: CharacterInfoScreenNavigationProps) => {
    const character = route.params.character
    const navigateToCharactersListScreen = () =>
        navigation.navigate('CharactersListScreen')
    return (
        <CharacterInfoView
            character={character}
            onBackPressed={navigateToCharactersListScreen}
        />
    )
}