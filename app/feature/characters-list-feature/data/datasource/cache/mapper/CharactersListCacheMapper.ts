import {CharactersList} from "../../../../domain/model/CharactersList";
import {Character} from "../../../../domain/model/Character";
import {CharactersListCacheDto} from "../dto/CharactersListCacheDto";
import {CharacterCacheDto} from "../dto/CharacterCacheDto";

export function serialize(model: CharactersList): CharactersListCacheDto {
    const data = model.data.map( character =>
        serializeCharacter(character)
    )

    return new CharactersListCacheDto(
        data,
    )
}

export function deserialize(dto: CharactersListCacheDto): CharactersList {
    const data = dto.data.map( character =>
        deserializeCharacter(character)
    )

    return new CharactersList(
        data,
    )
}

function serializeCharacter(model: Character): CharacterCacheDto {
    const id = model.id
    const name = model.name
    const films = JSON.stringify(model.films)
    const shortFilms = JSON.stringify(model.shortFilms)
    const tvShows = JSON.stringify(model.tvShows)
    const videoGames = JSON.stringify(model.videoGames)
    const parkAttractions = JSON.stringify(model.parkAttractions)
    const allies = JSON.stringify(model.allies)
    const enemies = JSON.stringify(model.enemies)
    const imageUrl = model.imageUrl
    const url = model.url

    return new CharacterCacheDto(
        id,
        name,
        films,
        shortFilms,
        tvShows,
        videoGames,
        parkAttractions,
        allies,
        enemies,
        imageUrl,
        url,
    )
}

function deserializeCharacter(dto: CharacterCacheDto): Character {
    const id = dto.id
    const name = dto.name
    const films = <string[]>JSON.parse(dto.films)
    const shortFilms = <string[]>JSON.parse(dto.shortFilms)
    const tvShows = <string[]>JSON.parse(dto.tvShows)
    const videoGames = <string[]>JSON.parse(dto.videoGames)
    const parkAttractions = <string[]>JSON.parse(dto.parkAttractions)
    const allies = <string[]>JSON.parse(dto.allies)
    const enemies = <string[]>JSON.parse(dto.enemies)
    const imageUrl = dto.imageUrl
    const url = dto.url

    return new Character(
        id,
        name,
        films,
        shortFilms,
        tvShows,
        videoGames,
        parkAttractions,
        allies,
        enemies,
        imageUrl,
        url,
    )
}



