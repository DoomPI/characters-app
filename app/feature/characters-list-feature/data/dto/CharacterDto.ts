class CharacterDto {
    films?: string[]
    shortFilms?: string[]
    _id?: number
    tvShows?: string[]
    videoGames?: string[]
    parkAttractions?: string[]
    allies?: string[]
    enemies?: string[]
    name?: string
    imageUrl?: string
    url?: string

    constructor(
        films?: string[],
        shortFilms?: string[],
        _id?: number,
        tvShows?: string[],
        videoGames?: string[],
        parkAttractions?: string[],
        allies?: string[],
        enemies?: string[],
        name?: string,
        imageUrl?: string,
        url?: string,
    ) {
        this.films = films
        this.shortFilms = shortFilms
        this._id = _id
        this.tvShows = tvShows
        this.videoGames = videoGames
        this.parkAttractions = parkAttractions
        this.allies = allies
        this.enemies = enemies
        this.name = name
        this.imageUrl = imageUrl
        this.url = url
    }
}