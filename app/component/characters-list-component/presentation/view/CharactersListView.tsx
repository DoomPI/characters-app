import {FlatList, Image, TextInput, View} from "react-native";
import React from "react";
import {styles} from "./CharactersListStyles";
import {Logger} from "../../../../core/logger/Logger";
import {CharactersListViewProps} from "./CharactersListViewProps";
import {CharactersListViewState} from "./CharactersListViewState";

const LOG_TAG = "CharactersListView"

export class CharactersListView extends React.Component<CharactersListViewProps, CharactersListViewState> {

    constructor(props: CharactersListViewProps) {
        super(props)
        this.state = {
            isFetching: false,
            characters: [],
        }
    }

    componentDidMount() {
        this.fetchCharactersList()
    }

    private fetchCharactersList() {
        this.setState({isFetching: true})
        this.props.presenter
            .getCharactersList()
            .then(characters => this.setState({characters: characters.data}))
            .then(() => this.setState({isFetching: false}))
    }

    render() {
        return (
            <View style={styles.charactersMainView}>
                <TextInput
                    style={styles.searchInput}
                    placeholder={"Search..."}
                    onSubmitEditing={(event) =>
                        this.props.presenter
                            .searchCharacters(event.nativeEvent.text)
                            .then(characters => {
                                Logger.i(LOG_TAG, `Setting characters ${characters}`)
                                this.setState({characters: characters.data})
                            })
                    }
                />

                <FlatList
                    style={styles.charactersList}
                    numColumns={3}
                    data={this.state.characters}
                    onRefresh={() => this.fetchCharactersList()}
                    refreshing={this.state.isFetching}
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
}