import {CharactersList} from "../model/CharactersList";

export interface CharactersListRepository {

    searchCharacters(searchText: string): Promise<CharactersList>

    getCharactersList(): Promise<CharactersList>
}