import {CustomCharactersListRepository} from "../../domain/repository/CustomCharactersListRepository";
import {CustomCharactersList} from "../../domain/model/CustomCharactersList";
import {Character} from "../../../../common/domain/model/Character";
import {
    addCustomCharactersList as addCustomCharactersListInCache,
    getCustomCharactersListByName as getCustomCharactersListByNameFromCache,
    getCustomCharactersLists as getCustomCharactersListsFromCache,
    replaceCustomCharactersList as replaceCustomCharactersListInCache,
    searchCustomCharactersList as searchCustomCharactersListInCache
} from "../datasource/cache/CustomCharactersListCacheDataSource";
import {deserialize, serialize} from "../datasource/cache/mapper/CustomCharactersListCacheMapper";

export class CustomCharactersListRepositoryImpl implements CustomCharactersListRepository {

    addCustomCharactersList(customCharactersList: CustomCharactersList): Promise<void> {
        return addCustomCharactersListInCache(serialize(customCharactersList))
    }

    addCharacterToCustomList(character: Character, listName: string): Promise<void> {
        return getCustomCharactersListByNameFromCache(listName)
            .then(dto => deserialize(dto))
            .then(prevList => {
                const characters = prevList.characters
                characters.push(character)
                return new CustomCharactersList(
                    listName,
                    characters,
                )
            })
            .then(newList => replaceCustomCharactersListInCache(serialize(newList)))
    }

    getCustomCharactersLists(): Promise<CustomCharactersList[]> {
        return getCustomCharactersListsFromCache()
            .then(dtos => dtos.map(dto =>
                deserialize(dto)
            ))
    }

    getCustomCharactersListByName(listName: string): Promise<CustomCharactersList> {
        return getCustomCharactersListByNameFromCache(listName)
            .then(dto => deserialize(dto))
    }

    searchCustomCharactersList(searchText: string): Promise<CustomCharactersList[]> {
        if (searchText == "") {
            return this.getCustomCharactersLists()
        }

        return searchCustomCharactersListInCache(searchText)
            .then(dtos => dtos.map(dto =>
                deserialize(dto)
            ))
    }

}