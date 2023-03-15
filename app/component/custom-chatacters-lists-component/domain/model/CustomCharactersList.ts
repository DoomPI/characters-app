import {Character} from "../../../../common/domain/model/Character";

export class CustomCharactersList {

    readonly name: string
    readonly characters: Character[]

    constructor(
        name: string,
        characters: Character[],
    ) {
        this.name = name
        this.characters = characters
    }
}