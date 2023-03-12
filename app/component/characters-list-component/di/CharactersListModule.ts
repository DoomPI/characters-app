import {CharactersListRepository} from "../domain/repository/CharactersListRepository";
import {CharactersListPresenter} from "../presentation/presenter/CharactersListPresenter";
import {CharactersListUseCases} from "../domain/usecases/CharactersListUseCases";
import {GetCharactersListUseCase} from "../domain/usecases/GetCharactersListUseCase";
import {SearchCharacterUseCase} from "../domain/usecases/SearchCharacterUseCase";
import {CharactersListViewProps} from "../presentation/view/CharactersListViewProps";

export interface CharactersListModule {
    assembleProps(): CharactersListViewProps

    provideCharactersListPresenter(
        charactersListUseCases: CharactersListUseCases,
    ): CharactersListPresenter

    provideCharactersListUseCases(
        getCharactersListUseCase: GetCharactersListUseCase,
        searchCharacterUseCase: SearchCharacterUseCase,
    ): CharactersListUseCases

    provideGetCharactersListUseCase(
        repository: CharactersListRepository,
    ): GetCharactersListUseCase

    provideSearchCharactersListUseCase(
        repository: CharactersListRepository,
    ): SearchCharacterUseCase
    provideCharactersListRepository(): CharactersListRepository
}