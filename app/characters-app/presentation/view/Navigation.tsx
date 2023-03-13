import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {CharactersListScreen} from "./screen/CharactersListScreen";
import {CharacterInfoScreen} from "./screen/CharacterInfoScreen";
import {Character} from "../../../common/domain/model/Character";

const Stack = createStackNavigator<StackParamList>()

export default function MainStack() {
    return (
        <Stack.Navigator initialRouteName={'CharactersListScreen'}>
            <Stack.Screen
                name={'CharactersListScreen'}
                component={CharactersListScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={'CharacterInfo'}
                component={CharacterInfoScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export type StackParamList = {
    CharactersListScreen: undefined,
    CharacterInfo: { character: Character },
}