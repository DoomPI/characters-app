import {CharacterComment} from "../../../../domain/model/CharacterComment";
import {CharacterCommentCacheDto} from "../dto/CharacterCommentCacheDto";

export function serialize(model: CharacterComment): CharacterCommentCacheDto {
    const characterId = model.characterId
    const comment = model.comment

    return new CharacterCommentCacheDto(
        characterId,
        comment,
    )
}

export function deserialize(dto: CharacterCommentCacheDto): CharacterComment {
    const characterId = dto.characterId
    const comment = dto.comment

    return new CharacterComment(
        characterId,
        comment,
    )
}