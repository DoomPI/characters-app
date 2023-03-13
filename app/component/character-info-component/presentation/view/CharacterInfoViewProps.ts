import {Character} from "../../../../common/domain/model/Character";

export type CharacterInfoViewProps = {
    character: Character,

    onBackPressed: () => void
}