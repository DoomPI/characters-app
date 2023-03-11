import {CharacterCacheDto} from "./CharacterCacheDto";

export class CharactersListCacheDto {

    data: CharacterCacheDto[]

    constructor(data: CharacterCacheDto[]) {
        this.data = data
    }
}