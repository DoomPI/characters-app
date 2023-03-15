import {CustomCharactersListModule} from "./CustomCharactersListModule";
import {
    CustomCharactersListsAddPresenter
} from "../presentation/presenter/add/CustomCharactersListsAddPresenter";
import {AddCharacterToCustomListUseCase} from "../domain/usecases/AddCharacterToCustomListUseCase";
import {
    CustomCharactersListsAddUseCases
} from "../domain/usecases/add/CustomCharactersListsAddUseCases";
import {CustomCharactersListRepository} from "../domain/repository/CustomCharactersListRepository";
import {GetCustomCharactersListsUseCase} from "../domain/usecases/GetCustomCharactersListsUseCase";
import {SearchCustomCharactersListUseCase} from "../domain/usecases/SearchCustomCharactersListUseCase";
import {CustomCharactersListRepositoryImpl} from "../data/repository/CustomCharactersListRepositoryImpl";
import {CustomCharactersListsGetUseCases} from "../domain/usecases/get/CustomCharactersListsGetUseCases";
import {CustomCharactersListsGetPresenter} from "../presentation/presenter/get/CustomCharactersListsGetPresenter";
import {AddCustomCharactersListUseCase} from "../domain/usecases/AddCustomCharactersListUseCase";
import {GetCustomCharactersListByNameUseCase} from "../domain/usecases/GetCustomCharactersListByNameUseCase";

export class CustomCharacterListModuleImpl implements CustomCharactersListModule {
    assembleAddPresenter(): CustomCharactersListsAddPresenter {
        const customCharactersListRepository = this.provideCustomCharactersListRepository()
        const addCharacterToCustomListUseCase = this.provideAddCharacterToCustomListUseCase(
            customCharactersListRepository,
        )
        const getCustomCharactersListsUseCase = this.provideGetCustomCharactersListsUseCase(
            customCharactersListRepository,
        )
        const searchCustomCharactersListUseCase = this.provideSearchCustomCharactersListUseCase(
            customCharactersListRepository,
        )
        const useCases = this.provideCustomCharactersListsAddUseCases(
            addCharacterToCustomListUseCase,
            getCustomCharactersListsUseCase,
            searchCustomCharactersListUseCase,
        )

        return this.provideCustomCharactersListsAddPresenter(
            useCases,
        )
    }

    assembleGetPresenter(): CustomCharactersListsGetPresenter {
        const customCharactersListRepository = this.provideCustomCharactersListRepository()
        const addCustomCharactersListsUseCase = this.provideAddCustomCharactersListUseCase(
            customCharactersListRepository,
        )
        const getCustomCharactersListsUseCase = this.provideGetCustomCharactersListsUseCase(
            customCharactersListRepository,
        )
        const getCustomCharactersListByNameUseCase = this.provideGetCustomCharactersListByNameUseCase(
            customCharactersListRepository,
        )

        const searchCustomCharactersListUseCase = this.provideSearchCustomCharactersListUseCase(
            customCharactersListRepository,
        )
        const useCases = this.provideCustomCharactersListsGetUseCases(
            addCustomCharactersListsUseCase,
            getCustomCharactersListsUseCase,
            getCustomCharactersListByNameUseCase,
            searchCustomCharactersListUseCase,
        )

        return this.provideCustomCharactersListsGetPresenter(
            useCases,
        )
    }

    provideCustomCharactersListsAddPresenter(useCases: CustomCharactersListsAddUseCases): CustomCharactersListsAddPresenter {
        return new CustomCharactersListsAddPresenter(
            useCases,
        )
    }

    provideCustomCharactersListsGetPresenter(
        useCases: CustomCharactersListsGetUseCases,
    ): CustomCharactersListsGetPresenter {
        return new CustomCharactersListsGetPresenter(
            useCases,
        )
    }

    provideCustomCharactersListsAddUseCases(
        addCharacterToCustomListUseCase: AddCharacterToCustomListUseCase,
        getCustomCharactersListsUseCase: GetCustomCharactersListsUseCase,
        searchCustomCharacterListUseCase: SearchCustomCharactersListUseCase,
        ): CustomCharactersListsAddUseCases {
        return new CustomCharactersListsAddUseCases(
            addCharacterToCustomListUseCase,
            getCustomCharactersListsUseCase,
            searchCustomCharacterListUseCase,
        )
    }

    provideCustomCharactersListsGetUseCases(
        addCustomCharactersListUseCase: AddCustomCharactersListUseCase,
        getCustomCharactersListsUseCase: GetCustomCharactersListsUseCase,
        getCustomCharactersListByNameUseCase: GetCustomCharactersListByNameUseCase,
        searchCustomCharacterListUseCase: SearchCustomCharactersListUseCase,
    ): CustomCharactersListsGetUseCases {
        return new CustomCharactersListsGetUseCases(
            addCustomCharactersListUseCase,
            getCustomCharactersListsUseCase,
            getCustomCharactersListByNameUseCase,
            searchCustomCharacterListUseCase,
        )
    }

    provideAddCharacterToCustomListUseCase(customCharactersListRepository: CustomCharactersListRepository): AddCharacterToCustomListUseCase {
        return new AddCharacterToCustomListUseCase(
            customCharactersListRepository,
        )
    }

    provideAddCustomCharactersListUseCase(
        customCharactersListRepository: CustomCharactersListRepository,
    ): AddCustomCharactersListUseCase {
        return new AddCustomCharactersListUseCase(
            customCharactersListRepository,
        )
    }

    provideGetCustomCharactersListsUseCase(
        customCharactersListRepository: CustomCharactersListRepository,
    ): GetCustomCharactersListsUseCase {
        return new GetCustomCharactersListsUseCase(
            customCharactersListRepository,
        )
    }

    provideGetCustomCharactersListByNameUseCase(
        customCharactersListRepository: CustomCharactersListRepository,
    ): GetCustomCharactersListByNameUseCase {
        return new GetCustomCharactersListByNameUseCase(
            customCharactersListRepository,
        )
    }

    provideSearchCustomCharactersListUseCase(customCharactersListRepository: CustomCharactersListRepository): SearchCustomCharactersListUseCase {
        return new SearchCustomCharactersListUseCase(
            customCharactersListRepository,
        )
    }

    provideCustomCharactersListRepository(): CustomCharactersListRepository {
        return new CustomCharactersListRepositoryImpl()
    }
}