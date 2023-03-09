import sendRequest from "../../../../../core/worker/NetworkWorker";
import {CharactersListDto} from "../../dto/CharactersListDto";

const DISNEY_API_URL = "https://api.disneyapi.dev/"
const SEARCH_CHARACTER_ENDPOINT = "character?name="
const ALL_CHARACTERS_ENDPOINT = "characters?page=1"

export function searchCharacters(searchText: String): Promise<CharactersListDto> {
    if (searchText == "") {
        return getAllCharactersList()
    }

    return sendRequest(DISNEY_API_URL + SEARCH_CHARACTER_ENDPOINT + searchText)
        .then((json) => <CharactersListDto>JSON.parse(json))
}

export function getAllCharactersList(): Promise<CharactersListDto> {
    return sendRequest(DISNEY_API_URL + ALL_CHARACTERS_ENDPOINT)
        .then((json) => <CharactersListDto>JSON.parse(json))
}



