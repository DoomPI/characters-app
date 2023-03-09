import {FlatList, Image, TextInput, View} from "react-native";
import {charactersRepository} from "../component/CharactersListComponent";
import {Character} from "../../domain/model/Character";
import React, {useState} from "react";

export default function CharactersListView() {
    const [characters, setCharacters] = useState<Character[]>([])

    return (
        <View
            style={
                {
                    height: "100%",
                    flexDirection: 'column',
                }
            }
        >
            <TextInput
                style={{height: "20%"}}
                placeholder={"Search..."}
                onSubmitEditing={(event) => {
                    charactersRepository
                        .searchCharacters(event.nativeEvent.text)
                        .then(characters => setCharacters(characters))
                }}
            />

            <FlatList
                style={{height: "80%"}}
                numColumns={3}
                data={characters}
                onLayout={ () =>
                    charactersRepository
                        .getAllCharactersList()
                        .then(characters => setCharacters(characters))
                }
                renderItem={({item}) =>
                    (
                        <Image
                            style={{
                                flex: 1,
                                margin: 5,
                                height: 130,
                            }}
                            source={
                                item.imageUrl
                                    ? {uri: item.imageUrl}
                                    : {}
                            }
                        />

                    )}
            />
        </View>
    )
}