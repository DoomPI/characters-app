import {CustomCharactersListRepository} from "../repository/CustomCharactersListRepository";
import {CustomCharactersList} from "../model/CustomCharactersList";

export class AddCustomCharactersListUseCase {

    private readonly customCharactersListRepository: CustomCharactersListRepository

    constructor(
        customCharactersListRepository: CustomCharactersListRepository,
    ) {
        this.customCharactersListRepository = customCharactersListRepository
    }

    execute(customCharactersList: CustomCharactersList) {
        return this.customCharactersListRepository.addCustomCharactersList(customCharactersList)
    }
}