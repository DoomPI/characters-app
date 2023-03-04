import {Character} from "../model/Character"

export interface CharacterRepository {

    searchCharacters(searchText: String): Promise<Character[]>

    getAllCharactersList(): Promise<Character[]>
}