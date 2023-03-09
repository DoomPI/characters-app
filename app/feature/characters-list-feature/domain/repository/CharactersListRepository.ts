import {CharactersList} from "../model/CharactersList";

export interface CharactersListRepository {

    searchCharacters(searchText: String): Promise<CharactersList>

    getCharactersList(): Promise<CharactersList>
}