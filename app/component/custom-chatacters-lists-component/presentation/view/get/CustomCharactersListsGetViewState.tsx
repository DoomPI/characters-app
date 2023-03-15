import {CustomCharactersList} from "../../../domain/model/CustomCharactersList";

export type CustomCharactersListsGetViewState = {
    createListTextInput: string,
    lists: CustomCharactersList[],
}