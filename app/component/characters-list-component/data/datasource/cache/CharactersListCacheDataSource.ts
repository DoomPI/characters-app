import {db} from "../../../../../common/data/datasource/cache/db/CharactersAppDatabase";
import {SQLResultSet} from "expo-sqlite";
import {CharactersListCacheDto} from "./dto/CharactersListCacheDto";
import {CharacterCacheDto} from "./dto/CharacterCacheDto";
import {Logger} from "../../../../../core/logger/Logger";

const LOG_TAG = "CharactersListCacheDataSource"
const TABLE_NAME = "Characters"
const table = createTable()

export function setCharactersList(charactersList: CharactersListCacheDto): Promise<void> {
    return table.then(() => new Promise((resolve, reject) => {
        const query = `INSERT OR REPLACE INTO ${TABLE_NAME} VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        const data = charactersList.data
        db.transaction(
            (tx) => {
                for (let index = 0; index < data.length; ++index) {
                    const character = data[index]
                    const args = [
                        character.id,
                        character.name,
                        character.films,
                        character.shortFilms,
                        character.tvShows,
                        character.videoGames,
                        character.parkAttractions,
                        character.allies,
                        character.enemies,
                        character.imageUrl,
                        character.url,
                    ]
                    tx.executeSql(
                        query,
                        args
                    )
                }
            },
            (error) => {
                Logger.e(LOG_TAG, error.message)
                reject(error)
                return false
            },
            () => {
                Logger.i(LOG_TAG, `setCharactersList ${charactersList}`)
                resolve()
            },
        )
    }))
}

export function getCharactersList(): Promise<CharactersListCacheDto> {
    return table.then(() => new Promise((resolve, reject) => {
        const query = `
                SELECT * FROM ${TABLE_NAME}
            `
        db.transaction((tx) =>
            tx.executeSql(
                query,
                undefined,
                (_, resultSet: SQLResultSet) => {
                    Logger.i(LOG_TAG, `getCharactersList ${resultSet}`)
                    resolve(parseCharactersList(resultSet))
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

export function searchCharacters(searchText: string): Promise<CharactersListCacheDto> {
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
                    Logger.i(LOG_TAG, `searchCharacters ${resultSet}`)
                    resolve(parseCharactersList(resultSet))
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
                id INTEGER PRIMARY KEY NOT NULL,
                name TEXT NOT NULL,
                films TEXT NOT NULL,
                shortFilms TEXT NOT NULL,
                tvShows TEXT NOT NULL,
                videoGames TEXT NOT NULL,
                parkAttractions TEXT NOT NULL,
                allies TEXT NOT NULL,
                enemies TEXT NOT NULL,
                imageUrl TEXT NULL,
                url TEXT NULL
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

const parseCharactersList = (resultSet: SQLResultSet) => {
    let characters = []

    for (let index = 0; index < resultSet.rows.length; ++index) {
        let item = resultSet.rows.item(index)
        characters.push(
            new CharacterCacheDto(
                item.id,
                item.name,
                item.films,
                item.shortFilms,
                item.tvShows,
                item.videoGames,
                item.parkAttractions,
                item.allies,
                item.enemies,
                item.imageUrl,
                item.url
            )
        )
    }

    return new CharactersListCacheDto(
        characters,
    )
}