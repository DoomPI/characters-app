import {CustomCharactersListsGetUseCases} from "../../../domain/usecases/get/CustomCharactersListsGetUseCases";
import {CustomCharactersList} from "../../../domain/model/CustomCharactersList";

export class CustomCharactersListsGetPresenter {

    private readonly useCases: CustomCharactersListsGetUseCases

    constructor(
        useCases: CustomCharactersListsGetUseCases,
    ) {
        this.useCases = useCases
    }

    addCustomCharactersList(customCharactersList: CustomCharactersList) {
        return this.useCases.addCustomCharactersList(customCharactersList)
            .catch(() => {})
    }

    getCustomCharactersLists(): Promise<CustomCharactersList[]> {
        return this.useCases.getCustomCharactersLists()
            .catch(() => [])
    }

    getCustomCharacterListByName(listName: string): Promise<CustomCharactersList> {
        return this.useCases.getCustomCharactersListByName(listName)
    }

    searchCustomCharactersList(searchText: string): Promise<CustomCharactersList[]> {
        const searchTextFormatted = searchText.trim()
        return this.useCases.searchCustomCharactersList(searchTextFormatted)
            .catch(() => [])
    }
}