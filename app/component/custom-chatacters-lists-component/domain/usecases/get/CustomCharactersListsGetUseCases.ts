import {AddCustomCharactersListUseCase} from "../AddCustomCharactersListUseCase";
import {GetCustomCharactersListsUseCase} from "../GetCustomCharactersListsUseCase";
import {SearchCustomCharactersListUseCase} from "../SearchCustomCharactersListUseCase";
import {CustomCharactersList} from "../../model/CustomCharactersList";
import {GetCustomCharactersListByNameUseCase} from "../GetCustomCharactersListByNameUseCase";

export class CustomCharactersListsGetUseCases {

    private readonly addCustomCharactersListUseCase: AddCustomCharactersListUseCase
    private readonly getCustomCharactersListsUseCase: GetCustomCharactersListsUseCase

    private readonly getCustomCharactersListByNameUseCase: GetCustomCharactersListByNameUseCase
    private readonly searchCustomCharactersListUseCase: SearchCustomCharactersListUseCase

    constructor(
        addCustomCharactersListUseCase: AddCustomCharactersListUseCase,
        getCustomCharactersListsUseCase: GetCustomCharactersListsUseCase,
        getCustomCharactersListByNameUseCase: GetCustomCharactersListByNameUseCase,
        searchCustomCharactersListUseCase: SearchCustomCharactersListUseCase,
    ) {
        this.addCustomCharactersListUseCase = addCustomCharactersListUseCase
        this.getCustomCharactersListsUseCase = getCustomCharactersListsUseCase
        this.getCustomCharactersListByNameUseCase = getCustomCharactersListByNameUseCase
        this.searchCustomCharactersListUseCase = searchCustomCharactersListUseCase
    }

    addCustomCharactersList(customCharactersList: CustomCharactersList) {
        return this.addCustomCharactersListUseCase.execute(customCharactersList)
    }

    getCustomCharactersLists() {
        return this.getCustomCharactersListsUseCase.execute()
    }

    getCustomCharactersListByName(listName: string) {
        return this.getCustomCharactersListByNameUseCase.execute(listName)
    }

    searchCustomCharactersList(searchText: string) {
        return this.searchCustomCharactersListUseCase.execute(searchText)
    }
}