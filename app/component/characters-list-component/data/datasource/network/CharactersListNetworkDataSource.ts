import sendRequest from "../../../../../core/worker/NetworkWorker";
import {CharactersListNetworkDto} from "./dto/CharactersListNetworkDto";

const DISNEY_API_URL = "https://api.disneyapi.dev/"
const SEARCH_CHARACTER_ENDPOINT = "character?name="
const ALL_CHARACTERS_ENDPOINT = "characters?page=1"

export function searchCharacters(searchText: string): Promise<CharactersListNetworkDto> {
    if (searchText == "") {
        return getCharactersList()
    }

    return sendRequest(DISNEY_API_URL + SEARCH_CHARACTER_ENDPOINT + searchText)
        .then((json) => <CharactersListNetworkDto>JSON.parse(json))
}

export function getCharactersList(): Promise<CharactersListNetworkDto> {
    return sendRequest(DISNEY_API_URL + ALL_CHARACTERS_ENDPOINT)
        .then((json) => <CharactersListNetworkDto>JSON.parse(json))
}



