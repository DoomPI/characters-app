export class CharacterComment {
    readonly characterId: number
    readonly comment: string

    constructor(
        characterId: number,
        comment: string,
    ) {
        this.characterId = characterId
        this.comment = comment
    }
}