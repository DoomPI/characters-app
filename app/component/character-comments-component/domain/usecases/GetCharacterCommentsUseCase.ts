import {CharacterCommentsRepository} from "../repository/CharacterCommentsRepository";

export class GetCharacterCommentsUseCase {

    private readonly characterCommentsRepository: CharacterCommentsRepository

    constructor(
        characterCommentsRepository: CharacterCommentsRepository,
    ) {
        this.characterCommentsRepository = characterCommentsRepository
    }

    execute(characterId: number) {
        return this.characterCommentsRepository.getCharacterComments(characterId)
    }
}