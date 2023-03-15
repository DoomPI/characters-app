import {FlatList, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import {styles} from "./CharactersListStyles";
import {Logger} from "../../../../core/logger/Logger";
import {CharactersListViewProps} from "./CharactersListViewProps";
import {CharactersListViewState} from "./CharactersListViewState";
import {
    CustomCharactersListsGetView
} from "../../../custom-chatacters-lists-component/presentation/view/get/CustomCharactersListsGetView";

const LOG_TAG = "CharactersListView"

export class CharactersListView extends React.Component<CharactersListViewProps, CharactersListViewState> {

    constructor(props: CharactersListViewProps) {
        super(props)
        this.state = {
            isLoading: false,
            characters: [],
        }
    }

    componentDidMount() {
        this.fetchCharactersList()
    }

    private fetchCharactersList() {
        this.setState({isLoading: true})
        this.props.charactersListPresenter
            .getCharactersList()
            .then(characters => this.setState({characters: characters.data}))
            .then(() => this.setState({isLoading: false}))
    }

    render() {
        return (
            <View style={styles.charactersMainView}>
                <View style={styles.topPanel}>
                    <Text style={styles.charactersListTitle}>
                        Disney
                    </Text>
                    <TextInput
                        style={styles.searchInput}
                        placeholder={"Search..."}
                        placeholderTextColor={"#FFFFFF4D"}
                        onSubmitEditing={(event) =>
                            this.props.charactersListPresenter
                                .searchCharacters(event.nativeEvent.text)
                                .then(characters => {
                                    Logger.i(LOG_TAG, `Setting characters ${characters}`)
                                    this.setState({characters: characters.data})
                                })
                        }
                    />
                </View>

                <FlatList
                    numColumns={3}
                    data={this.state.characters}
                    onRefresh={() => this.fetchCharactersList()}
                    refreshing={this.state.isLoading}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            style={styles.charactersListItem}
                            onPress={() => this.props.onItemPress(item)}
                        >
                            <Image
                                style={styles.characterImage}
                                source={
                                    item.imageUrl
                                        ? {uri: item.imageUrl}
                                        : {}
                                }
                            />
                        </TouchableOpacity>
                    }
                />

                <CustomCharactersListsGetView
                    presenter={this.props.customCharactersListsGetPresenter}
                    onItemClick={(listName) => {
                        this.props.customCharactersListsGetPresenter
                            .getCustomCharacterListByName(listName)
                            .then(list => {
                                Logger.i(LOG_TAG, `Setting custom list `)
                                this.setState({
                                    characters: list.characters,
                                })
                            })
                    }}
                />
            </View>
        )
    }
}