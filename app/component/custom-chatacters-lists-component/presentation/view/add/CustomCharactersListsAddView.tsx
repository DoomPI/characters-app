import React from "react";
import {CustomCharactersListsAddViewProps} from "./CustomCharactersListsAddViewProps";
import {CustomCharactersListsAddViewState} from "./CustomCharactersListsAddViewState";
import BottomSheet from "reanimated-bottom-sheet";
import {FlatList, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./CustomCharactersListsAddViewStyles";

export class CustomCharactersListsAddView
    extends React.Component<CustomCharactersListsAddViewProps, CustomCharactersListsAddViewState> {

    constructor(props: CustomCharactersListsAddViewProps) {
        super(props)
        this.state = {
            lists: [],
        }
    }

    componentDidMount() {
        this.fetchCustomCharactersLists()
    }

    render() {
        return (
            <BottomSheet
                renderHeader={() =>
                    <View style={styles.mainTitleContainer}>
                        <Text style={styles.mainTitle}>Lists</Text>
                    </View>
                }
                enabledBottomInitialAnimation={true}
                snapPoints={["60%", "12%"]}
                initialSnap={1}
                renderContent={() =>
                    <View style={styles.mainContentView}>
                        <TextInput
                            placeholder={"Search..."}
                            style={styles.textInput}
                            onSubmitEditing={event =>
                                this.props.presenter
                                    .searchCustomCharactersList(event.nativeEvent.text)
                                    .then(lists => this.setState({
                                        lists: lists,
                                    }))
                            }
                        />
                        <FlatList
                            numColumns={1}
                            data={this.state.lists}
                            renderItem={({item}) =>
                                <View style={styles.customListItemContainer}>
                                    <Text style={styles.customListItemNameText}>{item.name}</Text>
                                    <TouchableOpacity
                                        style={styles.customListAddButton}
                                        onPress={() =>
                                            this.props.presenter
                                                .addCharacterToCustomList(
                                                    this.props.character,
                                                    item.name,
                                                )
                                        }
                                    >
                                        <Text style={styles.customListAddButtonText}>Add to this list</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        />
                    </View>
                }
            />
        )
    }

    private fetchCustomCharactersLists() {
        this.props.presenter
            .getCustomCharactersLists()
            .then(lists => this.setState({
                lists: lists,
            }))
    }
}