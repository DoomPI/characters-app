import {
    CustomCharactersListBottomSheetPresenter
} from "../../presenter/bottomsheet/CustomCharactersListBottomSheetPresenter";
import {Character} from "../../../../../common/domain/model/Character";

export type CustomCharactersListsBottomSheetViewProps = {

    character: Character,
    presenter: CustomCharactersListBottomSheetPresenter,
}