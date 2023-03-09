import {CharactersListUseCases} from "../../domain/usecases/CharactersListUseCases";

export class CharactersListComponent {

    readonly useCases: CharactersListUseCases

    constructor(useCases: CharactersListUseCases) {
        this.useCases = useCases
    }
}
