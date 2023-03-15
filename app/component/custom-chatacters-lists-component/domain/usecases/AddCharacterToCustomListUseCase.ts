import {CustomCharactersListRepository} from "../repository/CustomCharactersListRepository";
import {Character} from "../../../../common/domain/model/Character";

export class AddCharacterToCustomListUseCase {

    private readonly customCharactersListRepository: CustomCharactersListRepository

    constructor(
        customCharactersListRepository: CustomCharactersListRepository,
    ) {
        this.customCharactersListRepository = customCharactersListRepository
    }

    execute(
        character: Character,
        listName: string,
    ) {
        return this.customCharactersListRepository.addCharacterToCustomList(
            character,
            listName
        )
    }
}