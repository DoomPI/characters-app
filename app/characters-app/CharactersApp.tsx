import CharactersListView from "../feature/characters-list-feature/presentation/view/CharactersListView";
import {CharactersListRepository} from "../feature/characters-list-feature/domain/repository/CharactersListRepository";
import {
    CharactersListRepositoryImpl
} from "../feature/characters-list-feature/data/repository/CharactersListRepositoryImpl";
import {CharactersListUseCases} from "../feature/characters-list-feature/domain/usecases/CharactersListUseCases";
import {GetCharactersListUseCase} from "../feature/characters-list-feature/domain/usecases/GetCharactersListUseCase";
import {SearchCharacterUseCase} from "../feature/characters-list-feature/domain/usecases/SearchCharacterUseCase";
import {
    CharactersListComponent
} from "../feature/characters-list-feature/presentation/component/CharactersListComponent";

export default function CharactersApp() {
    const charactersRepository: CharactersListRepository = new CharactersListRepositoryImpl()
    const useCases = new CharactersListUseCases(
        new GetCharactersListUseCase(charactersRepository),
        new SearchCharacterUseCase(charactersRepository),
    )
    const component = new CharactersListComponent(
        useCases,
    )

    return <CharactersListView component={component} />
}