import {CharacterRepositoryImpl} from "../../../../common/data/repository/CharacterRepositoryImpl";
import {CharacterRepository} from "../../../../common/domain/repository/CharacterRepository";

export const charactersRepository: CharacterRepository = new CharacterRepositoryImpl()
