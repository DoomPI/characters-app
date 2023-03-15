import {
    CustomCharactersListBottomSheetPresenter
} from "../presentation/presenter/bottomsheet/CustomCharactersListBottomSheetPresenter";
import {
    CustomCharactersListsBottomSheetUseCases
} from "../domain/usecases/bottomsheet/CustomCharactersListsBottomSheetUseCases";
import {AddCharacterToCustomListUseCase} from "../domain/usecases/AddCharacterToCustomListUseCase";
import {GetCustomCharactersListsUseCase} from "../domain/usecases/GetCustomCharactersListsUseCase";
import {SearchCustomCharactersListUseCase} from "../domain/usecases/SearchCustomCharactersListUseCase";
import {CustomCharactersListRepository} from "../domain/repository/CustomCharactersListRepository";

export interface CustomCharactersListModule {

    assembleBottomSheetPresenter(): CustomCharactersListBottomSheetPresenter

    provideCustomCharactersListBottomSheetPresenter(
        useCases: CustomCharactersListsBottomSheetUseCases,
    ): CustomCharactersListBottomSheetPresenter

    provideCustomCharactersListBottomSheetUseCases(
        addCharacterToCustomListUseCase: AddCharacterToCustomListUseCase,
        getCustomCharactersListsUseCase: GetCustomCharactersListsUseCase,
        searchCustomCharacterListUseCase: SearchCustomCharactersListUseCase,
    ): CustomCharactersListsBottomSheetUseCases,

    provideAddCharacterToCustomListUseCase(
        customCharactersListRepository: CustomCharactersListRepository,
    ): AddCharacterToCustomListUseCase

    provideGetCustomCharactersListsUseCase(
        customCharactersListRepository: CustomCharactersListRepository,
    ): GetCustomCharactersListsUseCase

    provideSearchCustomCharactersListUseCase(
        customCharactersListRepository: CustomCharactersListRepository,
    ): SearchCustomCharactersListUseCase

    provideCustomCharactersListRepository(): CustomCharactersListRepository
}