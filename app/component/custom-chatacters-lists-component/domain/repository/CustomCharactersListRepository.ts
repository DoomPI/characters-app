import {CustomCharactersList} from "../model/CustomCharactersList";
import {Character} from "../../../../common/domain/model/Character";

export interface CustomCharactersListRepository {

    addCustomCharactersList(customCharactersList: CustomCharactersList): Promise<void>

    addCharacterToCustomList(
        character: Character,
        listName: string,
    ): Promise<void>

    getCustomCharactersLists(): Promise<CustomCharactersList[]>

    getCustomCharactersListByName(listName: string): Promise<CustomCharactersList>

    searchCustomCharactersList(searchText: string): Promise<CustomCharactersList[]>
}