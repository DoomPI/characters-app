export class Character {
    id: number
    name: string
    films: string[]
    shortFilms: string[]
    tvShows: string[]
    videoGames: string[]
    parkAttractions: string[]
    allies: string[]
    enemies: string[]
    imageUrl?: string
    url?: string

    constructor(
        id: number,
        name: string,
        films: string[],
        shortFilms: string[],
        tvShows: string[],
        videoGames: string[],
        parkAttractions: string[],
        allies: string[],
        enemies: string[],
        imageUrl?: string,
        url?: string,
    ) {
        this.id = id
        this.name = name
        this.films = films
        this.shortFilms = shortFilms
        this.tvShows = tvShows
        this.videoGames = videoGames
        this.parkAttractions = parkAttractions
        this.allies = allies
        this.enemies = enemies
        this.imageUrl = imageUrl
        this.url = url
    }
}