import {CustomCharactersList} from "../../../../domain/model/CustomCharactersList";
import {CustomCharactersListCacheDto} from "../dto/CustomCharactersListCacheDto";
import {Character} from "../../../../../../common/domain/model/Character";

export function serialize(model: CustomCharactersList): CustomCharactersListCacheDto {
    const name = model.name
    const characters = JSON.stringify(model.characters)

    return new CustomCharactersListCacheDto(
        name,
        characters,
    )
}

export function deserialize(dto: CustomCharactersListCacheDto): CustomCharactersList {
    const name = dto.name
    const characters = <Character[]>JSON.parse(dto.characters)

    return new CustomCharactersList(
        name,
        characters,
    )
}