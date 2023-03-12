import {CharactersListPresenter} from "../presenter/CharactersListPresenter";
import {Character} from "../../../../common/domain/model/Character";

export type CharactersListViewProps = {
    presenter: CharactersListPresenter
    onItemPress: (character: Character) => void
}