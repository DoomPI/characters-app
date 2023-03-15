import {CharacterCommentsPresenter} from "../presentation/presenter/CharacterCommentsPresenter";
import {CharacterCommentsUseCases} from "../domain/usecases/CharacterCommentsUseCases";
import {AddCharacterCommentUseCase} from "../domain/usecases/AddCharacterCommentUseCase";
import {GetCharacterCommentsUseCase} from "../domain/usecases/GetCharacterCommentsUseCase";
import {CharacterCommentsRepository} from "../domain/repository/CharacterCommentsRepository";

export interface CharacterCommentsModule {

    assemble(): CharacterCommentsPresenter

    provideCharacterCommentsPresenter(
        useCases: CharacterCommentsUseCases,
    ): CharacterCommentsPresenter

    provideCharacterCommentsUseCases(
        addCharacterCommentUseCase: AddCharacterCommentUseCase,
        getCharacterCommentsUseCase: GetCharacterCommentsUseCase,
    ): CharacterCommentsUseCases

    provideAddCharacterCommentUseCase(
        characterCommentsRepository: CharacterCommentsRepository,
    ): AddCharacterCommentUseCase

    provideGetCharacterCommentsUseCase(
        characterCommentsRepository: CharacterCommentsRepository,
    ): GetCharacterCommentsUseCase

    provideCharacterCommentsRepository(): CharacterCommentsRepository
}