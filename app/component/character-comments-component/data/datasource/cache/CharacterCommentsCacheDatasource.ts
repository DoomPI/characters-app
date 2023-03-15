import {db} from "../../../../../common/data/datasource/cache/db/CharactersAppDatabase";
import {Logger} from "../../../../../core/logger/Logger";
import {SQLResultSet} from "expo-sqlite";
import {CharacterCommentCacheDto} from "./dto/CharacterCommentCacheDto";

const LOG_TAG = "CharacterCommentsCacheDataSource"
const TABLE_NAME = "CharacterComments"
const table = createTable()

export function addCharacterComment(characterComment: CharacterCommentCacheDto): Promise<void> {
    return table.then(() => new Promise((resolve, reject) => {
        const query = `INSERT OR REPLACE INTO ${TABLE_NAME}(characterId, comment) VALUES(?, ?)`
        db.transaction(
            (tx) => {
                const args = [
                    characterComment.characterId,
                    characterComment.comment,
                ]
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
                Logger.i(LOG_TAG, `addComment ${characterComment}`)
                resolve()
            },
        )
    }))
}

export function getCharacterComments(characterId: number): Promise<CharacterCommentCacheDto[]> {
    return table.then(() => new Promise((resolve, reject) => {
        const query = `
                SELECT * FROM ${TABLE_NAME} WHERE characterId = ?
        `
        const args = [
            characterId,
        ]
        db.transaction((tx) =>
            tx.executeSql(
                query,
                args,
                (_, resultSet: SQLResultSet) => {
                    Logger.i(LOG_TAG, `getCharactersList ${resultSet}`)
                    resolve(parseCharacterComments(resultSet))
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
function createTable(): Promise<void> {
    return new Promise((resolve, reject) => {
        const query = `
            CREATE TABLE IF NOT EXISTS ${TABLE_NAME}(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                characterId INTEGER NOT NULL,
                comment TEXT NOT NULL
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

const parseCharacterComments = (resultSet: SQLResultSet) => {
    let comments: CharacterCommentCacheDto[] = []

    for (let index = 0; index < resultSet.rows.length; ++index) {
        let item = resultSet.rows.item(index)
        comments.push(
            new CharacterCommentCacheDto(
                item.characterId,
                item.comment,
            )
        )
    }

    return comments
}