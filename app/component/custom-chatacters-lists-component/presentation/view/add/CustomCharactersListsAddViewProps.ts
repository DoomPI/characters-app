import {
    CustomCharactersListsAddPresenter
} from "../../presenter/add/CustomCharactersListsAddPresenter";
import {Character} from "../../../../../common/domain/model/Character";

export type CustomCharactersListsAddViewProps = {

    character: Character,
    presenter: CustomCharactersListsAddPresenter,
}