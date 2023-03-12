import {Character} from "../../../../common/domain/model/Character";

export type CharactersListViewState = {
    isFetching: boolean,
    characters: Character[],
}