import {CharacterNetworkDto} from "./CharacterNetworkDto";

export class CharactersListNetworkDto {
    data?: CharacterNetworkDto[]
    count?: number
    totalPages?: number
    nextPage?: string
    previousPage?: string

    constructor(
        data?: CharacterNetworkDto[],
        count?: number,
        totalPages?: number,
        nextPage?: string,
        previousPage?: string,
    ) {
        this.data = data
        this.count = count
        this.totalPages = totalPages
        this.nextPage = nextPage
        this.previousPage = previousPage
    }
}