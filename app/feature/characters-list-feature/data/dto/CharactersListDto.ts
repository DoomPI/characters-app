class CharactersListDto {
    data?: CharacterDto[]
    count?: number
    totalPages?: number
    nextPage?: string

    constructor(
        data?: CharacterDto[],
        count?: number,
        totalPages?: number,
        nextPage?: string
    ) {
        this.data = data
        this.count = count
        this.totalPages = totalPages
        this.nextPage = nextPage
    }
}