import {Character} from "../../../domain/model/Character";
import {CharactersList} from "../../../domain/model/CharactersList";
import {db} from "../../../../../core/db/CharactersAppDatabase";
import {SQLResultSet} from "expo-sqlite";

export function setCharactersList(charactersList: CharactersList): Promise<void> {
    return db.then((db) => {
        const character = charactersList.data[0]
        const query = `INSERT OR REPLACE INTO Characters VALUES(?, ?, ?, ?)`
        const args = [
            character.id,
            character.name,
            character.imageUrl,
            character.url,
        ]

        return new Promise((resolve) => {
            db.transaction(
                (tx) => tx.executeSql(
                    query,
                    args,
                    () => {
                        resolve()
                    },
                    (transaction, error) => {
                        console.error(error.message)
                        console.error(query)
                        return false
                    }
                )
            )
        })
    })
}

export function getCharactersList(): Promise<CharactersList> {
    return db.then((db) => {
        const query = `
            SELECT * FROM Characters
        `

        return new Promise((resolve) => {
            db.transaction((tx) =>
                tx.executeSql(
                    query,
                    undefined,
                    (_, resultSet: SQLResultSet) => {
                        console.log(resultSet.rows._array)
                        resolve(fillCharactersList(resultSet))
                    },
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
            new Character(
                item.id,
                item.name,
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                item.imageUrl,
                item.url
            )
        )
    }

    return new CharactersList(
        characters,
    )
}