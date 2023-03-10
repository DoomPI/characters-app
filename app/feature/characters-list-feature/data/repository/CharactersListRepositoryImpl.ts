import {
    getCharactersList as getCharactersListFromNetwork,
    searchCharacters
} from "../datasource/network/CharactersListNetworkDataSource";
import {map} from "../datasource/network/mapper/CharactersListNetworkMapper";
import {CharactersListRepository} from "../../domain/repository/CharactersListRepository";
import {CharactersList} from "../../domain/model/CharactersList";
import {
    getCharactersList as getCharactersListFromCache,
    setCharactersList
} from "../datasource/cache/CharactersListCacheDataSource";
import {deserialize, serialize} from "../datasource/cache/mapper/CharactersListCacheMapper";

export class CharactersListRepositoryImpl implements CharactersListRepository {

    getCharactersList(): Promise<CharactersList> {
        return this.getCharactersListFromNetwork()
            .then(charactersList => this.setCharactersListInCache(charactersList))
            .then(this.getCharactersListFromCache)
    }

    searchCharacters(searchText: String): Promise<CharactersList> {
        return searchCharacters(searchText)
            .then((dtos) => map(dtos))
            .catch(this.getCharactersListFromCache)
    }

    private getCharactersListFromNetwork(): Promise<CharactersList> {
        return getCharactersListFromNetwork()
            .then((dtos) => map(dtos)
            );
    }

    private setCharactersListInCache(charactersList: CharactersList): Promise<void> {
        const charactersListCacheDto = serialize(charactersList)
        return setCharactersList(charactersListCacheDto)
    }

    private getCharactersListFromCache(): Promise<CharactersList> {
        return getCharactersListFromCache()
            .then(dto => deserialize(dto))
    }

}