import {Character} from "../../../../common/domain/model/Character";

export class CharactersList {
    readonly data: Character[]

    constructor(
        data: Character[],
    ) {
        this.data = data
    }
}