import React from "react";
import {CustomCharactersListsGetViewState} from "./CustomCharactersListsGetViewState";
import {CustomCharactersListsGetViewProps} from "./CustomCharactersListsGetViewProps";
import BottomSheet from "reanimated-bottom-sheet";
import {FlatList, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./CustomCharactersListsGetViewStyles";
import {CustomCharactersList} from "../../../domain/model/CustomCharactersList";

export class  CustomCharactersListsGetView
    extends React.Component<CustomCharactersListsGetViewProps, CustomCharactersListsGetViewState> {

    constructor(props: CustomCharactersListsGetViewProps) {
        super(props)
        this.state = {
            createListTextInput: "",
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
                snapPoints={["60%", "5%"]}
                initialSnap={1}
                renderContent={() =>
                    <View style={styles.mainContentView}>
                        <TextInput
                            placeholder={"Search..."}
                            style={styles.textInputSearch}
                            onSubmitEditing={event =>
                                this.props.presenter
                                    .searchCustomCharactersList(event.nativeEvent.text)
                                    .then(lists => this.setState({
                                        lists: lists,
                                    }))
                            }
                        />
                        <View style={styles.textInputContainer}>
                            <TextInput
                                placeholder={"Create list..."}
                                style={styles.textInputAdd}
                                onChangeText={text => this.setState({
                                    createListTextInput: text,
                                })}
                            />
                            <TouchableOpacity
                                style={styles.customListAddButton}
                                onPress={() => {
                                    const lists = this.state.lists
                                    const newList = new CustomCharactersList(
                                        this.state.createListTextInput.trim(),
                                        [],
                                    )
                                    lists.push(newList)
                                    this.props.presenter
                                        .addCustomCharactersList(newList)
                                    this.setState({
                                        lists: lists,
                                    })
                                }}
                            >
                                <Text style={styles.customListAddButtonText}>Add</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            numColumns={1}
                            data={this.state.lists}
                            renderItem={({item}) =>
                                <View style={styles.customListItemContainer}>
                                    <TouchableOpacity
                                        onPress={() => this.props.onItemClick(item.name)}
                                    >
                                        <Text style={styles.customListItemNameText}>{item.name}</Text>
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