import {CharactersListRepository} from "../repository/CharactersListRepository";

export class GetCharactersListUseCase {

    private readonly charactersListRepository: CharactersListRepository

    constructor(charactersListRepository: CharactersListRepository) {
        this.charactersListRepository = charactersListRepository
    }

    execute() {
        return this.charactersListRepository.getCharactersList()
    }
}