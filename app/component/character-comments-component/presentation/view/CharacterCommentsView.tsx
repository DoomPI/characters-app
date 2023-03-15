import React from "react";
import {CharacterCommentsViewProps} from "./CharacterCommentsViewProps";
import {CharacterCommentsViewState} from "./CharacterCommentsViewState";
import {FlatList, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./CharacterCommentsViewStyles";
import BottomSheet from "reanimated-bottom-sheet";

export class CharacterCommentsView
    extends React.Component<CharacterCommentsViewProps, CharacterCommentsViewState> {

    constructor(props: CharacterCommentsViewProps) {
        super(props)
        this.state = {
            textInput: "",
            comments: [],
        }
    }

    componentDidMount() {
        this.fetchComments()
    }

    render() {
        return (
            <BottomSheet
                renderHeader={() =>
                    <View style={styles.mainTitleContainer}>
                        <Text style={styles.mainTitle}>Comments</Text>
                    </View>
                }
                enabledBottomInitialAnimation={true}
                snapPoints={["60%", "17%"]}
                initialSnap={1}
                renderContent={() =>
                    <View style={styles.mainContentView}>
                        <TextInput
                            placeholder={"Type a comment..."}
                            multiline={true}
                            style={styles.textInput}
                            onChangeText={text =>
                                this.setState({
                                    textInput: text,
                                })
                            }
                        />
                        <View style={styles.textInputSubmitButtonContainer}>
                            <TouchableOpacity
                                style={styles.textInputSubmitButton}
                                onPress={() => {
                                    const comments = this.state.comments
                                    const newComment = this.state.textInput
                                    this.props.presenter
                                        .addCharacterComment(
                                            this.props.characterId,
                                            newComment,
                                        )
                                    comments.push(newComment)
                                    this.setState({
                                        comments: comments,
                                    })
                                }}
                            >
                                <Text style={styles.textInputSubmitButtonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            numColumns={1}
                            data={this.state.comments}
                            renderItem={({item}) =>
                                <View style={styles.commentTextContainer}>
                                    <Text style={styles.commentText}>{item}</Text>
                                </View>
                            }
                        />
                    </View>
                }
            />
        )
    }

    private fetchComments() {
        this.props.presenter
            .getCharacterComments(this.props.characterId)
            .then(characterComments => this.setState({
                comments: characterComments.map(characterComment => characterComment.comment)
            }))
    }
}