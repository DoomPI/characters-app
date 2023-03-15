import {CustomCharactersListModule} from "./CustomCharactersListModule";
import {
    CustomCharactersListBottomSheetPresenter
} from "../presentation/presenter/bottomsheet/CustomCharactersListBottomSheetPresenter";
import {AddCharacterToCustomListUseCase} from "../domain/usecases/AddCharacterToCustomListUseCase";
import {
    CustomCharactersListsBottomSheetUseCases
} from "../domain/usecases/bottomsheet/CustomCharactersListsBottomSheetUseCases";
import {CustomCharactersListRepository} from "../domain/repository/CustomCharactersListRepository";
import {GetCustomCharactersListsUseCase} from "../domain/usecases/GetCustomCharactersListsUseCase";
import {SearchCustomCharactersListUseCase} from "../domain/usecases/SearchCustomCharactersListUseCase";
import {CustomCharactersListRepositoryImpl} from "../data/repository/CustomCharactersListRepositoryImpl";

export class CustomCharacterListModuleImpl implements CustomCharactersListModule {
    assembleBottomSheetPresenter(): CustomCharactersListBottomSheetPresenter {
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
        const useCases = this.provideCustomCharactersListBottomSheetUseCases(
            addCharacterToCustomListUseCase,
            getCustomCharactersListsUseCase,
            searchCustomCharactersListUseCase,
        )

        return this.provideCustomCharactersListBottomSheetPresenter(
            useCases,
        )
    }

    provideCustomCharactersListBottomSheetPresenter(useCases: CustomCharactersListsBottomSheetUseCases): CustomCharactersListBottomSheetPresenter {
        return new CustomCharactersListBottomSheetPresenter(
            useCases,
        )
    }

    provideCustomCharactersListBottomSheetUseCases(
        addCharacterToCustomListUseCase: AddCharacterToCustomListUseCase,
        getCustomCharactersListsUseCase: GetCustomCharactersListsUseCase,
        searchCustomCharacterListUseCase: SearchCustomCharactersListUseCase,
        ): CustomCharactersListsBottomSheetUseCases {
        return new CustomCharactersListsBottomSheetUseCases(
            addCharacterToCustomListUseCase,
            getCustomCharactersListsUseCase,
            searchCustomCharacterListUseCase,
        )
    }

    provideAddCharacterToCustomListUseCase(customCharactersListRepository: CustomCharactersListRepository): AddCharacterToCustomListUseCase {
        return new AddCharacterToCustomListUseCase(
            customCharactersListRepository,
        )
    }

    provideGetCustomCharactersListsUseCase(customCharactersListRepository: CustomCharactersListRepository): GetCustomCharactersListsUseCase {
        return new GetCustomCharactersListsUseCase(
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