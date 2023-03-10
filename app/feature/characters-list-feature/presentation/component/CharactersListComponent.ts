import {CharactersListUseCases} from "../../domain/usecases/CharactersListUseCases";
import {CharactersList} from "../../domain/model/CharactersList";

export class CharactersListComponent {

    private readonly useCases: CharactersListUseCases

    constructor(useCases: CharactersListUseCases) {
        this.useCases = useCases
    }

    getCharactersList(): Promise<CharactersList> {
        return this.useCases.getCharactersList()
    }

    searchCharacters(searchText: string): Promise<CharactersList> {
        const searchTextFormatted = searchText.trim()
        return this.useCases.searchCharacters(searchTextFormatted)
    }
}
