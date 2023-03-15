import {
    CustomCharactersListsAddPresenter
} from "../presentation/presenter/add/CustomCharactersListsAddPresenter";
import {
    CustomCharactersListsAddUseCases
} from "../domain/usecases/add/CustomCharactersListsAddUseCases";
import {AddCharacterToCustomListUseCase} from "../domain/usecases/AddCharacterToCustomListUseCase";
import {GetCustomCharactersListsUseCase} from "../domain/usecases/GetCustomCharactersListsUseCase";
import {SearchCustomCharactersListUseCase} from "../domain/usecases/SearchCustomCharactersListUseCase";
import {CustomCharactersListRepository} from "../domain/repository/CustomCharactersListRepository";
import {AddCustomCharactersListUseCase} from "../domain/usecases/AddCustomCharactersListUseCase";
import {CustomCharactersListsGetUseCases} from "../domain/usecases/get/CustomCharactersListsGetUseCases";
import {CustomCharactersListsGetPresenter} from "../presentation/presenter/get/CustomCharactersListsGetPresenter";
import {GetCustomCharactersListByNameUseCase} from "../domain/usecases/GetCustomCharactersListByNameUseCase";

export interface CustomCharactersListModule {

    assembleAddPresenter(): CustomCharactersListsAddPresenter

    assembleGetPresenter(): CustomCharactersListsGetPresenter

    provideCustomCharactersListsAddPresenter(
        useCases: CustomCharactersListsAddUseCases,
    ): CustomCharactersListsAddPresenter

    provideCustomCharactersListsGetPresenter(
        useCases: CustomCharactersListsGetUseCases,
    ): CustomCharactersListsGetPresenter

    provideCustomCharactersListsAddUseCases(
        addCharacterToCustomListUseCase: AddCharacterToCustomListUseCase,
        getCustomCharactersListsUseCase: GetCustomCharactersListsUseCase,
        searchCustomCharacterListUseCase: SearchCustomCharactersListUseCase,
    ): CustomCharactersListsAddUseCases,

    provideCustomCharactersListsGetUseCases(
        addCustomCharactersListUseCase: AddCustomCharactersListUseCase,
        getCustomCharactersListsUseCase: GetCustomCharactersListsUseCase,
        getCustomCharactersListByNameUseCase: GetCustomCharactersListByNameUseCase,
        searchCustomCharacterListUseCase: SearchCustomCharactersListUseCase,
    ): CustomCharactersListsGetUseCases

    provideAddCharacterToCustomListUseCase(
        customCharactersListRepository: CustomCharactersListRepository,
    ): AddCharacterToCustomListUseCase

    provideAddCustomCharactersListUseCase(
        customCharactersListRepository: CustomCharactersListRepository,
    ): AddCustomCharactersListUseCase

    provideGetCustomCharactersListsUseCase(
        customCharactersListRepository: CustomCharactersListRepository,
    ): GetCustomCharactersListsUseCase

    provideGetCustomCharactersListByNameUseCase(
        customCharactersListRepository: CustomCharactersListRepository,
    ): GetCustomCharactersListByNameUseCase

    provideSearchCustomCharactersListUseCase(
        customCharactersListRepository: CustomCharactersListRepository,
    ): SearchCustomCharactersListUseCase

    provideCustomCharactersListRepository(): CustomCharactersListRepository
}