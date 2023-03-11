import {FlatList, Image, TextInput, View} from "react-native";
import {Character} from "../../../../common/domain/model/Character";
import React, {useState} from "react";
import {styles} from "./CharactersListStyles";
import {Logger} from "../../../../core/logger/Logger";
import {CharactersListViewProps} from "./CharactersListViewProps";

const LOG_TAG = "CharactersListView"

export default function CharactersListView(props: CharactersListViewProps) {
    const [characters, setCharacters] = useState<Character[]>([])

    return (
        <View style={styles.charactersMainView}>
            <TextInput
                style={styles.searchInput}
                placeholder={"Search..."}
                onSubmitEditing={(event) => {
                    props
                        .presenter
                        .searchCharacters(event.nativeEvent.text)
                        .then(characters => {
                            Logger.i(LOG_TAG, `Setting characters ${characters}`)
                            setCharacters(characters.data)
                        })
                }}
            />

            <FlatList
                style={styles.charactersList}
                numColumns={3}
                data={characters}
                onLayout={() =>
                    props
                        .presenter
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