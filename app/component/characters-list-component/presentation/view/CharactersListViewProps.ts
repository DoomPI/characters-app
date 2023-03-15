import {CharactersListPresenter} from "../presenter/CharactersListPresenter";
import {Character} from "../../../../common/domain/model/Character";
import {
    CustomCharactersListsGetPresenter
} from "../../../custom-chatacters-lists-component/presentation/presenter/get/CustomCharactersListsGetPresenter";

export type CharactersListViewProps = {
    charactersListPresenter: CharactersListPresenter

    customCharactersListsGetPresenter: CustomCharactersListsGetPresenter,
    onItemPress: (character: Character) => void
}