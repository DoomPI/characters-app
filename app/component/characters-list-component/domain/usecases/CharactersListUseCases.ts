import {GetCharactersListUseCase} from "./GetCharactersListUseCase";
import {SearchCharacterUseCase} from "./SearchCharacterUseCase";

export class CharactersListUseCases {

    private readonly getCharactersListUseCase: GetCharactersListUseCase
    private readonly searchCharacterUseCase: SearchCharacterUseCase

    constructor(
        getCharactersListUseCase: GetCharactersListUseCase,
        searchCharacterUseCase: SearchCharacterUseCase,
    ) {
        this.getCharactersListUseCase = getCharactersListUseCase
        this.searchCharacterUseCase = searchCharacterUseCase
    }

    getCharactersList() {
        return this.getCharactersListUseCase.execute()
    }

    searchCharacters(searchText: string) {
        return this.searchCharacterUseCase.execute(searchText)
    }
}