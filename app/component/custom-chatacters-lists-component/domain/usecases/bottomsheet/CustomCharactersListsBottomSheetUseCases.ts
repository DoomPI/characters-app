import {SearchCustomCharactersListUseCase} from "../SearchCustomCharactersListUseCase";
import {AddCharacterToCustomListUseCase} from "../AddCharacterToCustomListUseCase";
import {Character} from "../../../../../common/domain/model/Character";
import {GetCustomCharactersListsUseCase} from "../GetCustomCharactersListsUseCase";

export class CustomCharactersListsBottomSheetUseCases {

    private readonly addCharacterToCustomListUseCase: AddCharacterToCustomListUseCase

    private readonly getCustomCharactersListsUseCase: GetCustomCharactersListsUseCase
    private readonly searchCustomCharactersListUseCase: SearchCustomCharactersListUseCase

    constructor(
        addCharacterToCustomListUseCase: AddCharacterToCustomListUseCase,
        getCustomCharactersListUseCase: GetCustomCharactersListsUseCase,
        searchCustomCharactersListUseCase: SearchCustomCharactersListUseCase,
    ) {
        this.addCharacterToCustomListUseCase = addCharacterToCustomListUseCase
        this.getCustomCharactersListsUseCase = getCustomCharactersListUseCase
        this.searchCustomCharactersListUseCase = searchCustomCharactersListUseCase
    }

    addCharacterToCustomList(
        character: Character,
        listName: string,
    ) {
        return this.addCharacterToCustomListUseCase.execute(
            character,
            listName,
        )
    }

    getCustomCharactersLists() {
        return this.getCustomCharactersListsUseCase.execute()
    }

    searchCustomCharactersList(searchText: string) {
        return this.searchCustomCharactersListUseCase.execute(searchText)
    }
}