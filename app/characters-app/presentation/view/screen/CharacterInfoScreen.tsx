import {Image} from "react-native";
import {NavigationProp, RouteProp} from "@react-navigation/native";
import {StackParamList} from "../Navigation";
import React from "react";

export interface CharacterInfoScreenNavigationProps {
    navigation: NavigationProp<StackParamList, 'CharacterInfo'>
    route: RouteProp<StackParamList, 'CharacterInfo'>
}

export const CharacterInfoScreen = ({route}: CharacterInfoScreenNavigationProps) => {
    const character = route.params.character
    return (
        <Image
            style={{width: "100%", height: "100%"}}
            source={
                character.imageUrl
                    ? {uri: character.imageUrl}
                    : {}
            }
        />
    )
}