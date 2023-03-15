import {CustomCharactersListsAddUseCases} from "../../../domain/usecases/add/CustomCharactersListsAddUseCases";
import {Character} from "../../../../../common/domain/model/Character";
import {CustomCharactersList} from "../../../domain/model/CustomCharactersList";
import {Logger} from "../../../../../core/logger/Logger";

const LOG_TAG = "CustomCharactersListsAddPresenter"

export class CustomCharactersListsAddPresenter {

    private readonly useCases: CustomCharactersListsAddUseCases

    constructor(
        useCases: CustomCharactersListsAddUseCases,
    ) {
        this.useCases = useCases
    }

    addCharacterToCustomList(
        character: Character,
        listName: string,
    ): Promise<void> {
        return this.useCases
            .addCharacterToCustomList(
                character,
                listName,
            )
            .catch((error) => {Logger.e(LOG_TAG, error.message)})
    }

    getCustomCharactersLists(): Promise<CustomCharactersList[]> {
        return this.useCases
            .getCustomCharactersLists()
            .catch(() => [])
    }

    searchCustomCharactersList(searchText: string): Promise<CustomCharactersList[]> {
        return this.useCases
            .searchCustomCharactersList(searchText.trim())
            .catch(() => [])
    }
}