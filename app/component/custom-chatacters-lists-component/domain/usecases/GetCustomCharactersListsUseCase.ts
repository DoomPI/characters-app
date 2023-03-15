import {CustomCharactersListRepository} from "../repository/CustomCharactersListRepository";

export class GetCustomCharactersListsUseCase {

    private readonly customCharactersListRepository: CustomCharactersListRepository

    constructor(
        customCharactersListRepository: CustomCharactersListRepository,
    ) {
        this.customCharactersListRepository = customCharactersListRepository
    }

    execute() {
        return this.customCharactersListRepository.getCustomCharactersLists()
    }
}