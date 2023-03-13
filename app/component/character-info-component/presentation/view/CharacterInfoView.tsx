import React from "react";
import {CharacterInfoViewProps} from "./CharacterInfoViewProps";
import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {CharacterInfoViewState} from "./CharacterInfoViewState";
import {format} from "../formatter/CharacterInfoFormatter";
import {styles} from "./CharacterInfoStyles";
import {LinearGradient} from "expo-linear-gradient";

export class CharacterInfoView extends React.Component<CharacterInfoViewProps, CharacterInfoViewState> {

    constructor(props: CharacterInfoViewProps) {
        super(props)
        this.state = {
            vo: null,
        }
    }

    componentDidMount() {
        this.formatCharacter()
    }

    render() {
        return (
            <View>
                <View style={styles.topPanel}>
                    <TouchableOpacity
                        onPress={() => this.props.onBackPressed()}
                    >
                        <Text style={styles.backButton}>
                            ⇦
                        </Text>
                    </TouchableOpacity>
                </View>
                <ImageBackground
                    source={require('../../../../../assets/disneyland_bg.png')}
                    style={styles.mainBackground}
                    blurRadius={0.1}
                >
                    <LinearGradient
                        colors={["#00000000", "#333333"]}
                        style={styles.mainBackground}
                    >
                        <ScrollView>
                            <View style={styles.characterMainInfoContainer}>
                                <Image
                                    style={styles.characterImage}
                                    source={
                                        this.state.vo?.imageUrl
                                            ? {uri: this.state.vo.imageUrl}
                                            : {}
                                    }
                                />
                                <Text style={styles.characterName}>
                                    {this.state.vo ? this.state.vo.name : ""}
                                </Text>
                            </View>
                            <Text style={styles.characterInfo}>
                                {this.state.vo ? this.state.vo.info : ""}
                            </Text>
                        </ScrollView>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }

    private formatCharacter() {
        this.setState({
            vo: format(this.props.character),
        })
    }
}