import {CustomCharactersListsBottomSheetUseCases} from "../../../domain/usecases/bottomsheet/CustomCharactersListsBottomSheetUseCases";
import {Character} from "../../../../../common/domain/model/Character";

export class CustomCharactersListBottomSheetPresenter {

    private readonly useCases: CustomCharactersListsBottomSheetUseCases

    constructor(
        useCases: CustomCharactersListsBottomSheetUseCases,
    ) {
        this.useCases = useCases
    }

    addCharacterToCustomList(
        character: Character,
        listName: string,
    ) {
        return this.useCases.addCharacterToCustomList(
            character,
            listName,
        )
    }

    getCustomCharactersLists() {
        return this.useCases.getCustomCharactersLists()
    }

    searchCustomCharactersList(searchText: string) {
        return this.useCases.searchCustomCharactersList(searchText.trim())
    }
}