import {Character} from "../../../../common/domain/model/Character";
import {CharacterInfoVo} from "../vo/CharacterInfoVo";

export function format(character: Character): CharacterInfoVo {
    const name = character.name
    const info = formatInfo(character)
    const imageUrl = character.imageUrl

    return new CharacterInfoVo(
        name,
        info,
        imageUrl,
    )
}

function formatInfo(character: Character): string {
    const films = character.films
    const shortFilms = character.shortFilms
    const tvShows = character.tvShows
    const videoGames = character.videoGames
    const parkAttractions = character.parkAttractions
    const allies = character.allies
    const enemies = character.enemies

    let info = ""
    if (films.length != 0) {
        info += "Films: " + films.join(", ") + '\n'
    }
    if (shortFilms.length != 0) {
        info += "Short films: " + shortFilms.join(", ") + '\n'
    }
    if (tvShows.length != 0) {
        info += "TV shows: " + tvShows.join(", ") + '\n'
    }
    if (videoGames.length != 0) {
        info += "Video games: " + videoGames.join(", ") + '\n'
    }
    if (parkAttractions.length != 0) {
        info += "Park attractions: " + parkAttractions.join(", ") + '\n'
    }
    if (allies.length != 0) {
        info += "Allies: " + allies.join(", ") + '\n'
    }
    if (enemies.length != 0) {
        info += "Enemies: " + enemies.join(", ")
    }

    return info
}