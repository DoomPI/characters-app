import {CustomCharactersListRepository} from "../repository/CustomCharactersListRepository";

export class SearchCustomCharactersListUseCase {

    private readonly customCharactersListRepository: CustomCharactersListRepository

    constructor(
        customCharactersListRepository: CustomCharactersListRepository,
    ) {
        this.customCharactersListRepository = customCharactersListRepository
    }

    execute(searchText: string) {
        return this.customCharactersListRepository.searchCustomCharactersList(searchText)
    }
}