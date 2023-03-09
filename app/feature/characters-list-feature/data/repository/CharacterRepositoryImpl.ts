import {getAllCharactersList, searchCharacters} from "../datasource/network/CharacterNetworkDataSource";
import {mapCharacters} from "../mapper/CharacterMapper";
import {Character} from "../../domain/model/Character";
import {CharacterRepository} from "../../domain/repository/CharacterRepository";

export class CharacterRepositoryImpl implements CharacterRepository {

    getAllCharactersList(): Promise<Character[]> {
        return getAllCharactersList()
            .then((dtos) => mapCharacters(dtos))
    }

    searchCharacters(searchText: String): Promise<Character[]> {
        return searchCharacters(searchText)
            .then((dtos) => mapCharacters(dtos))
    }

}