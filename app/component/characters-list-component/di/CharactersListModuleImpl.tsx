import {CharactersListModule} from "./CharactersListModule";
import {CharactersListPresenter} from "../presentation/presenter/CharactersListPresenter";
import {CharactersListRepository} from "../domain/repository/CharactersListRepository";
import {CharactersListUseCases} from "../domain/usecases/CharactersListUseCases";
import {GetCharactersListUseCase} from "../domain/usecases/GetCharactersListUseCase";
import {SearchCharacterUseCase} from "../domain/usecases/SearchCharacterUseCase";
import {CharactersListRepositoryImpl} from "../data/repository/CharactersListRepositoryImpl";

export class CharactersListModuleImpl implements CharactersListModule {

    assemble(): CharactersListPresenter {
        const repository = this.provideCharactersListRepository()
        const getCharactersListUseCase = this.provideGetCharactersListUseCase(
            repository
        )
        const searchCharacterUseCase = this.provideSearchCharactersListUseCase(
            repository
        )
        const useCases = this.provideCharactersListUseCases(
            getCharactersListUseCase,
            searchCharacterUseCase,
        )
        return this.provideCharactersListPresenter(
            useCases,
        )
    }

    provideCharactersListPresenter(
        useCases: CharactersListUseCases,
    ): CharactersListPresenter {
        return new CharactersListPresenter(
            useCases,
        )
    }

    provideCharactersListUseCases(
        getCharactersListUseCase: GetCharactersListUseCase,
        searchCharacterUseCase: SearchCharacterUseCase,
    ): CharactersListUseCases {
        return new CharactersListUseCases(
            getCharactersListUseCase,
            searchCharacterUseCase,
        )
    }

    provideGetCharactersListUseCase(
        repository: CharactersListRepository,
    ): GetCharactersListUseCase {
        return new GetCharactersListUseCase(
            repository,
        )
    }

    provideSearchCharactersListUseCase(
        repository: CharactersListRepository,
    ): SearchCharacterUseCase {
        return new SearchCharacterUseCase(
            repository,
        )
    }

    provideCharactersListRepository(): CharactersListRepository {
        return new CharactersListRepositoryImpl()
    }
}