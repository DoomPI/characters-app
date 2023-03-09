export class CharactersListDto {
    data?: CharacterDto[]
    count?: number
    totalPages?: number
    nextPage?: string
    previousPage?: string

    constructor(
        data?: CharacterDto[],
        count?: number,
        totalPages?: number,
        nextPage?: string,
        previousPage?: string,
    ) {
        this.data = data
        this.count = count
        this.totalPages = totalPages
        this.nextPage = nextPage
        this.previousPage = previousPage
    }
}