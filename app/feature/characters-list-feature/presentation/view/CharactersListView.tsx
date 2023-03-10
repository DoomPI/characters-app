import {FlatList, Image, TextInput, View} from "react-native";
import {CharactersListComponent} from "../component/CharactersListComponent";
import {Character} from "../../domain/model/Character";
import React, {useState} from "react";
import {styles} from "./CharactersListStyles";

export default function CharactersListView(component: CharactersListComponent) {
    const [characters, setCharacters] = useState<Character[]>([])

    return (
        <View style={styles.charactersMainView}>
            <TextInput
                style={styles.searchInput}
                placeholder={"Search..."}
                onSubmitEditing={(event) => {
                    component
                        .useCases
                        .searchCharacters(event.nativeEvent.text)
                        .then(characters => {
                            console.log(`Setting character ${characters.data[0].name}`)
                            setCharacters(characters.data)
                        })
                }}
            />

            <FlatList
                style={styles.charactersList}
                numColumns={3}
                data={characters}
                onLayout={() =>
                    component
                        .useCases
                        .getCharactersList()
                        .then(characters => setCharacters(characters.data))
                }
                renderItem={({item}) =>
                    <Image
                        style={styles.characterImage}
                        source={
                            item.imageUrl
                                ? {uri: item.imageUrl}
                                : {}
                        }
                    />
                }
            />
        </View>
    )
}