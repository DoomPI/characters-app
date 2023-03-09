import {CharacterRepositoryImpl} from "../../data/repository/CharacterRepositoryImpl";
import {CharacterRepository} from "../../domain/repository/CharacterRepository";

export const charactersRepository: CharacterRepository = new CharacterRepositoryImpl()
