import {
    getCharactersList as getCharactersListFromNetwork,
    searchCharacters as searchCharactersInNetwork
} from "../datasource/network/CharactersListNetworkDataSource";
import {map} from "../datasource/network/mapper/CharactersListNetworkMapper";
import {CharactersListRepository} from "../../domain/repository/CharactersListRepository";
import {CharactersList} from "../../domain/model/CharactersList";
import {
    getCharactersList as getCharactersListFromCache,
    setCharactersList,
    searchCharacters as searchCharactersInCache
} from "../datasource/cache/CharactersListCacheDataSource";
import {deserialize, serialize} from "../datasource/cache/mapper/CharactersListCacheMapper";

export class CharactersListRepositoryImpl implements CharactersListRepository {

    getCharactersList(): Promise<CharactersList> {
        return this.getCharactersListFromNetwork()
            .then(charactersList =>
                this.setCharactersListInCache(charactersList)
                    .then(() => charactersList)
            )
            .catch(() => this.getCharactersListFromCache())
    }

    searchCharacters(searchText: string): Promise<CharactersList> {
        return this.searchCharactersInNetwork(searchText)
            .catch(() => this.searchCharactersInCache(searchText))
    }

    private getCharactersListFromNetwork(): Promise<CharactersList> {
        return getCharactersListFromNetwork()
            .then((dtos) => map(dtos))
    }

    private setCharactersListInCache(charactersList: CharactersList): Promise<void> {
        const charactersListCacheDto = serialize(charactersList)
        return setCharactersList(charactersListCacheDto)
    }

    private getCharactersListFromCache(): Promise<CharactersList> {
        return getCharactersListFromCache()
            .then(dto => deserialize(dto))
    }

    private searchCharactersInNetwork(searchText: string): Promise<CharactersList> {
        return searchCharactersInNetwork(searchText)
            .then((dtos) => map(dtos))
    }

    private searchCharactersInCache(searchText: string): Promise<CharactersList> {
        return searchCharactersInCache(searchText)
            .then(dto => deserialize(dto))
    }
}