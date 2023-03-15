import {CharactersListModule} from "../../component/characters-list-component/di/CharactersListModule";
import {CharactersListModuleImpl} from "../../component/characters-list-component/di/CharactersListModuleImpl";
import {LoginModule} from "../../component/login-component/di/LoginModule";
import {LoginModuleImpl} from "../../component/login-component/di/LoginModuleImpl";
import {CharacterCommentsModule} from "../../component/character-comments-component/di/CharacterCommentsModule";
import {CharacterCommentsModuleImpl} from "../../component/character-comments-component/di/CharacterCommentsModuleImpl";

export const loginModule: LoginModule = new LoginModuleImpl()
export const charactersListModule: CharactersListModule = new CharactersListModuleImpl()
export const characterCommentsModule: CharacterCommentsModule = new CharacterCommentsModuleImpl()