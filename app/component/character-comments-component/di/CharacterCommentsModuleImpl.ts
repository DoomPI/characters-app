import {CharacterCommentsModule} from "./CharacterCommentsModule";
import {CharacterCommentsPresenter} from "../presentation/presenter/CharacterCommentsPresenter";
import {CharacterCommentsUseCases} from "../domain/usecases/CharacterCommentsUseCases";
import {AddCharacterCommentUseCase} from "../domain/usecases/AddCharacterCommentUseCase";
import {CharacterCommentsRepository} from "../domain/repository/CharacterCommentsRepository";
import {GetCharacterCommentsUseCase} from "../domain/usecases/GetCharacterCommentsUseCase";
import {CharacterCommentsRepositoryImpl} from "../data/repository/CharacterCommentsRepositoryImpl";

export class CharacterCommentsModuleImpl implements CharacterCommentsModule {
    assemble(): CharacterCommentsPresenter {
        const characterCommentsRepository = this.provideCharacterCommentsRepository()
        const addCharacterCommentUseCase = this.provideAddCharacterCommentUseCase(
            characterCommentsRepository,
        )
        const getCharacterCommentsUseCase = this.provideGetCharacterCommentsUseCase(
            characterCommentsRepository,
        )
        const useCases = this.provideCharacterCommentsUseCases(
            addCharacterCommentUseCase,
            getCharacterCommentsUseCase,
        )

        return this.provideCharacterCommentsPresenter(
            useCases,
        )
    }

    provideCharacterCommentsPresenter(
        useCases: CharacterCommentsUseCases,
    ): CharacterCommentsPresenter {
        return new CharacterCommentsPresenter(
            useCases,
        )
    }

    provideCharacterCommentsUseCases(
        addCharacterCommentUseCase: AddCharacterCommentUseCase,
        getCharacterCommentsUseCase: GetCharacterCommentsUseCase,
    ): CharacterCommentsUseCases {
        return new CharacterCommentsUseCases(
            addCharacterCommentUseCase,
            getCharacterCommentsUseCase,
        )
    }

    provideAddCharacterCommentUseCase(
        characterCommentsRepository: CharacterCommentsRepository,
    ): AddCharacterCommentUseCase {
        return new AddCharacterCommentUseCase(
            characterCommentsRepository,
        )
    }

    provideGetCharacterCommentsUseCase(
        characterCommentsRepository: CharacterCommentsRepository,
    ): GetCharacterCommentsUseCase {
        return new GetCharacterCommentsUseCase(
            characterCommentsRepository,
        )
    }

    provideCharacterCommentsRepository(): CharacterCommentsRepository {
        return new CharacterCommentsRepositoryImpl()
    }

}