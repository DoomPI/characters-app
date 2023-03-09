export class Character {
    readonly id: number
    readonly name: string
    readonly films: string[]
    readonly shortFilms: string[]
    readonly tvShows: string[]
    readonly videoGames: string[]
    readonly parkAttractions: string[]
    readonly allies: string[]
    readonly enemies: string[]
    readonly imageUrl?: string
    readonly url?: string

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