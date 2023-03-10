import {
    getCharactersList as getCharactersListFromNetwork,
    searchCharacters
} from "../datasource/network/CharactersListNetworkDataSource";
import {map} from "../mapper/CharactersListMapper";
import {CharactersListRepository} from "../../domain/repository/CharactersListRepository";
import {CharactersList} from "../../domain/model/CharactersList";
import {
    getCharactersList as getCharactersListFromCache,
    setCharactersList
} from "../datasource/cache/CharactersListCacheDataSource";

export class CharactersListRepositoryImpl implements CharactersListRepository {

    getCharactersList(): Promise<CharactersList> {
        return getCharactersListFromNetwork()
            .then((dtos) =>
                map(dtos)
            )
            .then(charactersList =>
                setCharactersList(charactersList)
            )
            .then(() =>
                getCharactersListFromCache()
            )
    }

    searchCharacters(searchText: String): Promise<CharactersList> {
        return searchCharacters(searchText)
            .then((dtos) => map(dtos))
            .then(charactersList =>
                setCharactersList(charactersList)
            )
            .then(() =>
                getCharactersListFromCache()
            )
    }

}