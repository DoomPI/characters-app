import {CharacterComment} from "../model/CharacterComment";

export interface CharacterCommentsRepository {

    addCharacterComment(characterComment: CharacterComment): Promise<void>

    getCharacterComments(characterId: number): Promise<CharacterComment[]>
}