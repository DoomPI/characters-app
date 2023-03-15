import {CharacterCommentsRepository} from "../../domain/repository/CharacterCommentsRepository";
import {CharacterComment} from "../../domain/model/CharacterComment";
import {
    addCharacterComment as addCharacterCommentInCache,
    getCharacterComments as getCharacterCommentsFromCache,
} from "../datasource/cache/CharacterCommentsCacheDatasource";
import {deserialize, serialize} from "../datasource/cache/mapper/CharacterCommentMapper";

export class CharacterCommentsRepositoryImpl implements CharacterCommentsRepository {
    addCharacterComment(characterComment: CharacterComment): Promise<void> {
        const dto = serialize(characterComment)
        return addCharacterCommentInCache(dto)
    }

    getCharacterComments(characterId: number): Promise<CharacterComment[]> {
        return getCharacterCommentsFromCache(characterId)
            .then(dtos => dtos.map(dto => deserialize(dto)))
    }

}