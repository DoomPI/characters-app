export class CharacterInfoVo {
    name: string
    info: string
    imageUrl: string | null

    constructor(
        name: string,
        info: string,
        imageUrl: string | null,
    ) {
        this.name = name
        this.info = info
        this.imageUrl = imageUrl
    }
}