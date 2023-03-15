import {CustomCharactersListsGetPresenter} from "../../presenter/get/CustomCharactersListsGetPresenter";

export type CustomCharactersListsGetViewProps = {
    presenter: CustomCharactersListsGetPresenter,
    onItemClick: (listName: string) => void
}