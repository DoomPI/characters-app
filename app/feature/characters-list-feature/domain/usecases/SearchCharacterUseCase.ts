import {CharactersListRepository} from "../repository/CharactersListRepository";

export class SearchCharacterUseCase {

    private readonly charactersListRepository: CharactersListRepository

    constructor(charactersListRepository: CharactersListRepository) {
        this.charactersListRepository = charactersListRepository
    }

    execute(searchText: string) {
        return this.charactersListRepository.searchCharacters(searchText)
            .then((charactersList) => charactersList)
    }
}