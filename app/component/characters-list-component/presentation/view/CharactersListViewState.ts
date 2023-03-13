import {Character} from "../../../../common/domain/model/Character";

export type CharactersListViewState = {
    isLoading: boolean,
    characters: Character[],
}