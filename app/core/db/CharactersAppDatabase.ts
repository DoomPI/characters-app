import * as SQLite from "expo-sqlite"

export const db = openDb()

function openDb(): Promise<SQLite.WebSQLDatabase> {
    const db = SQLite.openDatabase('Characters.db')
    const query = `
        CREATE TABLE IF NOT EXISTS Characters(
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT NOT NULL,
            imageUrl TEXT NULL,
            url TEXT NULL
        );
    `
    return new Promise((resolve) => {
        db.transaction(
            (tx) => {
                tx.executeSql(
                    query
                )
            },
            undefined,
            () => resolve(db)
        )
    })
}