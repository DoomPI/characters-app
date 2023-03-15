import {CharacterCommentsUseCases} from "../../domain/usecases/CharacterCommentsUseCases";
import {CharacterComment} from "../../domain/model/CharacterComment";

export class CharacterCommentsPresenter {

    private readonly useCases: CharacterCommentsUseCases

    constructor(useCases: CharacterCommentsUseCases) {
        this.useCases = useCases
    }

    addCharacterComment(
        characterId: number,
        comment: string,
    ) {
        const characterComment = new CharacterComment(
            characterId,
            comment,
        )
        return this.useCases.addCharacterComment(characterComment)
    }

    getCharacterComments(characterId: number) {
        return this.useCases.getCharacterComment(characterId)
    }
}