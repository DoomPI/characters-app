import {getAllCharactersList, searchCharacters} from "../datasource/network/CharactersListNetworkDataSource";
import {map} from "../mapper/CharactersListMapper";
import {CharactersListRepository} from "../../domain/repository/CharactersListRepository";
import {CharactersList} from "../../domain/model/CharactersList";

export class CharactersListRepositoryImpl implements CharactersListRepository {

    getCharactersList(): Promise<CharactersList> {
        return getAllCharactersList()
            .then((dtos) => map(dtos))
    }

    searchCharacters(searchText: String): Promise<CharactersList> {
        return searchCharacters(searchText)
            .then((dtos) => map(dtos))
    }

}