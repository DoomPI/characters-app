import {db} from "../../../../../common/data/datasource/cache/db/CharactersAppDatabase";
import {SQLResultSet} from "expo-sqlite";
import {Logger} from "../../../../../core/logger/Logger";
import {CustomCharactersListCacheDto} from "./dto/CustomCharactersListCacheDto";

const LOG_TAG = "CharactersListCacheDataSource"
const TABLE_NAME = "CustomCharactersLists"
const table = createTable()

export function addCustomCharactersList(customCharactersList: CustomCharactersListCacheDto): Promise<void> {
    return table.then(() => new Promise((resolve, reject) => {
        const query = `INSERT OR REPLACE INTO ${TABLE_NAME} VALUES(?, ?)`
        const args = [
            customCharactersList.name,
            customCharactersList.characters,
        ]
        db.transaction(
            (tx) => {
                tx.executeSql(
                    query,
                    args
                )
            },
            (error) => {
                Logger.e(LOG_TAG, error.message)
                reject(error)
                return false
            },
            () => {
                Logger.i(LOG_TAG, `addCustomCharactersList ${customCharactersList}`)
                resolve()
            },
        )
    }))
}

export function getCustomCharactersListByName(listName: string): Promise<CustomCharactersListCacheDto> {
    return table.then(() => new Promise((resolve, reject) => {
        const query = `
            SELECT * FROM ${TABLE_NAME} WHERE name = ? LIMIT 1
        `
        const args = [
            listName
        ]
        db.transaction((tx) => {
            tx.executeSql(
                query,
                args,
                (_, resultSet: SQLResultSet) => {
                    Logger.i(LOG_TAG, `getCustomCharactersListByName ${resultSet}`)
                    resolve(parseCustomCharactersLists(resultSet)[0])
                },
                (_, error) => {
                    Logger.e(LOG_TAG, error.message)
                    reject(error)
                    return false
                }
            )
        })
    }))
}

export function replaceCustomCharactersList(customCharactersList: CustomCharactersListCacheDto): Promise<void> {
    return table.then(() => new Promise((resolve, reject) => {
        const query = `REPLACE INTO ${TABLE_NAME} VALUES(?, ?)`
        const args = [
            customCharactersList.name,
            customCharactersList.characters,
        ]
        db.transaction(
            (tx) => {
                tx.executeSql(
                    query,
                    args
                )
            },
            (error) => {
                Logger.e(LOG_TAG, error.message)
                reject(error)
                return false
            },
            () => {
                Logger.i(LOG_TAG, `replaceCustomCharactersList ${customCharactersList}`)
                resolve()
            },
        )
    }))
}

export function getCustomCharactersLists(): Promise<CustomCharactersListCacheDto[]> {
    return table.then(() => new Promise((resolve, reject) => {
        const query = `
                SELECT * FROM ${TABLE_NAME}
            `
        db.transaction((tx) =>
            tx.executeSql(
                query,
                undefined,
                (_, resultSet: SQLResultSet) => {
                    Logger.i(LOG_TAG, `getCustomCharactersLists ${resultSet}`)
                    resolve(parseCustomCharactersLists(resultSet))
                },
                (_, error) => {
                    Logger.e(LOG_TAG, error.message)
                    reject(error)
                    return false
                }
            )
        )
    }))
}

export function searchCustomCharactersList(searchText: string): Promise<CustomCharactersListCacheDto[]> {
    return table.then(() => new Promise((resolve, reject) => {
        const searchTextFormatted = searchText.toLowerCase()
        const query = `
                SELECT * FROM ${TABLE_NAME} WHERE INSTR(LOWER(name), ?) > 0 OR INSTR(?, LOWER(name)) > 0
            `
        const args = [
            searchTextFormatted,
            searchTextFormatted,
        ]
        db.transaction((tx) => {
            tx.executeSql(
                query,
                args,
                (_, resultSet: SQLResultSet) => {
                    Logger.i(LOG_TAG, `searchCustomCharactersList ${resultSet}`)
                    resolve(parseCustomCharactersLists(resultSet))
                },
                (_, error) => {
                    Logger.e(LOG_TAG, error.message)
                    reject(error)
                    return false
                }
            )
        })
    }))
}

function createTable(): Promise<void> {
    return new Promise((resolve, reject) => {
        const query = `
            CREATE TABLE IF NOT EXISTS ${TABLE_NAME}(                
                name TEXT PRIMARY KEY NOT NULL,
                characters TEXT NOT NULL
            )
        `
        db.transaction(
            (tx) => {
                tx.executeSql(
                    query
                )
            },
            () => reject(),
            () => resolve(),
        )
    })
}

const parseCustomCharactersLists = (resultSet: SQLResultSet) => {
    let lists: CustomCharactersListCacheDto[] = []

    for (let index = 0; index < resultSet.rows.length; ++index) {
        let item = resultSet.rows.item(index)
        lists.push(
            new CustomCharactersListCacheDto(
                item.name,
                item.characters,
            )
        )
    }

    return lists
}