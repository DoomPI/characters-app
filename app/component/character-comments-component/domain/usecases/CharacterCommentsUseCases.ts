import {AddCharacterCommentUseCase} from "./AddCharacterCommentUseCase";
import {GetCharacterCommentsUseCase} from "./GetCharacterCommentsUseCase";
import {CharacterComment} from "../model/CharacterComment";

export class CharacterCommentsUseCases {

    private readonly addCharacterCommentUseCase: AddCharacterCommentUseCase
    private readonly getCharacterCommentUseCase: GetCharacterCommentsUseCase

    constructor(
        addCharacterCommentUseCase: AddCharacterCommentUseCase,
        getCharacterCommentUseCase: GetCharacterCommentsUseCase,
    ) {
        this.addCharacterCommentUseCase = addCharacterCommentUseCase
        this.getCharacterCommentUseCase = getCharacterCommentUseCase
    }

    addCharacterComment(characterComment: CharacterComment) {
        return this.addCharacterCommentUseCase.execute(characterComment)
    }

    getCharacterComment(characterId: number) {
        return this.getCharacterCommentUseCase.execute(characterId)
    }
}