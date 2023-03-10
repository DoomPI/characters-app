import {db} from "../../../../../common/db/CharactersAppDatabase";
import {SQLResultSet} from "expo-sqlite";
import {CharactersListCacheDto} from "./dto/CharactersListCacheDto";
import {CharacterCacheDto} from "./dto/CharacterCacheDto";
import {Logger} from "../../../../../core/logger/Logger";

const LOG_TAG = "CharactersListCacheDataSource"

export function setCharactersList(charactersList: CharactersListCacheDto): Promise<void> {
    return db.then((db) => {
        const query = `INSERT OR REPLACE INTO Characters VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        const data = charactersList.data

        return new Promise((resolve, reject) => {
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
        })
    })
}

export function getCharactersList(): Promise<CharactersListCacheDto> {
    return db.then((db) => {
        const query = `
            SELECT * FROM Characters
        `

        return new Promise((resolve, reject) => {
            db.transaction((tx) =>
                tx.executeSql(
                    query,
                    undefined,
                    (_, resultSet: SQLResultSet) => {
                        Logger.i(LOG_TAG, `getCharactersList ${resultSet}`)
                        resolve(fillCharactersList(resultSet))
                    },
                    (_, error) => {
                        reject(error)
                        return false
                    }
                )
            )
        })
    })
}

const fillCharactersList = (resultSet: SQLResultSet) => {
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