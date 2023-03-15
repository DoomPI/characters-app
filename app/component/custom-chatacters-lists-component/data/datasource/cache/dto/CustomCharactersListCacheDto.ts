export class CustomCharactersListCacheDto {

    readonly name: string
    readonly characters: string

    constructor(
        name: string,
        characters: string,
    ) {
        this.name = name
        this.characters = characters
    }
}