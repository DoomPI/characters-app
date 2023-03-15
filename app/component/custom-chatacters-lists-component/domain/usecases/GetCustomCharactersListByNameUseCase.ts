import {CustomCharactersListRepository} from "../repository/CustomCharactersListRepository";

export class GetCustomCharactersListByNameUseCase {

    private readonly customCharactersListRepository: CustomCharactersListRepository

    constructor(
        customCharactersListRepository: CustomCharactersListRepository,
    ) {
        this.customCharactersListRepository = customCharactersListRepository
    }

    execute(listName: string) {
        return this.customCharactersListRepository.getCustomCharactersListByName(listName)
    }
}