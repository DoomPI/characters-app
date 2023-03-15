import {CharacterCommentsRepository} from "../repository/CharacterCommentsRepository";
import {CharacterComment} from "../model/CharacterComment";

export class AddCharacterCommentUseCase {

    private readonly characterCommentsRepository: CharacterCommentsRepository

    constructor(
        characterCommentsRepository: CharacterCommentsRepository,
    ) {
        this.characterCommentsRepository = characterCommentsRepository
    }

    execute(characterComment: CharacterComment) {
        return this.characterCommentsRepository.addCharacterComment(characterComment)
    }
}