import {CharactersListModule} from "../../component/characters-list-component/di/CharactersListModule";
import {CharactersListModuleImpl} from "../../component/characters-list-component/di/CharactersListModuleImpl";

export const charactersListModule: CharactersListModule = new CharactersListModuleImpl()