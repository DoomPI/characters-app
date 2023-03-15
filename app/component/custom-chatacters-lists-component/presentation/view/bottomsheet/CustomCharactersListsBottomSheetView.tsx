import React from "react";
import {CustomCharactersListsBottomSheetViewProps} from "./CustomCharactersListsBottomSheetViewProps";
import {CustomCharactersListsBottomSheetViewState} from "./CustomCharactersListsBottomSheetViewState";
import BottomSheet from "reanimated-bottom-sheet";
import {FlatList, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./CustomCharactersListsBottomSheetViewStyles";

export class CustomCharactersListsBottomSheetView
    extends React.Component<CustomCharactersListsBottomSheetViewProps, CustomCharactersListsBottomSheetViewState> {

    constructor(props: CustomCharactersListsBottomSheetViewProps) {
        super(props)
        this.state = {
            lists: [],
        }
    }

    componentDidMount() {
        this.fetchCharacterCustomLists()
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
                snapPoints={["60%", "10%"]}
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
                                        <Text style={styles.customListAddButtonText}>Add</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        />
                    </View>
                }
            />
        )
    }

    private fetchCharacterCustomLists() {
        this.props.presenter
            .getCustomCharactersLists()
            .then(lists => this.setState({
                lists: lists,
            }))
    }
}