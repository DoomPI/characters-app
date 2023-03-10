import {Character} from "../../domain/model/Character";
import {CharactersList} from "../../domain/model/CharactersList";
import {CharactersListDto} from "../dto/CharactersListDto";

export function map(charactersList: CharactersListDto): CharactersList {
    let data = charactersList.data
        ? charactersList.data.map(dto =>
            mapCharacter(dto)
        )
        : []

    return new CharactersList(
        data
    )
}

export function mapCharacter(dto: CharacterDto): Character {
    const id = dto._id!
    const name = dto.name!
    const films = dto.films ? dto.films : []
    const shortFilms = dto.shortFilms ? dto.shortFilms : []
    const tvShows = dto.tvShows ? dto.tvShows : []
    const videoGames = dto.videoGames ? dto.videoGames : []
    const parkAttractions = dto.parkAttractions ? dto.parkAttractions : []
    const allies = dto.allies ? dto.allies : []
    const enemies = dto.enemies ? dto.enemies : []
    const imageUrl = dto.imageUrl ? dto.imageUrl : null
    const url = dto.url ? dto.url : null

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