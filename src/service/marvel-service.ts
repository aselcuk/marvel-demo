import md5 from 'md5';
import { Character } from 'src/models/Character';
import { ComicBook } from 'src/models/ComicBook';
import { sortDescByModifiedDate } from 'src/utils/utils';

const marvelService = (function () {
    let instance;

    const API_BASE = 'https://gateway.marvel.com/v1/public';
    const API_CHARACTERS_LIMIT = 30;
    const API_CHARACTER_COMICS_LIMIT = 100;
    const COMICS_LIMIT = 10;

    const timestamp = new Date().getTime();
    const MARVEL_PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
    const MARVEL_PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;

    const hash = md5(timestamp + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY);


    const createInstance = () => {

        const getCharacters = async (): Promise<Character[]> => {
            try {
                const charactersAPI = `${API_BASE}/characters?ts=${timestamp}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}&limit=${API_CHARACTERS_LIMIT}`;

                const response = await fetch(charactersAPI);
                const responseToJson = await response.json();

                const result = responseToJson.data.results.map((item) => {
                    return new Character({
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        thumbnail: item.thumbnail.path + '.' + item.thumbnail.extension,
                        comics: new Array<ComicBook>()
                    });
                });

                return Promise.resolve(result);
            } catch (error) {
                return Promise.reject('getCharacters error: ' + error);
            }
        };

        const getCharacterById = async (characterId: number): Promise<Character> => {
            try {
                const characterAPI = `${API_BASE}/characters/${characterId}?ts=${timestamp}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}`;

                const response = await fetch(characterAPI);
                const responseToJson = await response.json();

                const character = responseToJson.data.results[0];

                const result = new Character({
                    id: character.id,
                    name: character.name,
                    description: character.description,
                    thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
                    comics: new Array<ComicBook>()
                });

                const characterComics = await getComicsByCharacterId(characterId);

                result.comics = characterComics;

                return Promise.resolve(result);
            } catch (error) {
                return Promise.reject('getCharacterById error: ' + error);
            }
        };

        const getComicsByCharacterId = async (characterId: number): Promise<ComicBook[]> => {
            try {
                const characterComicsAPI = `${API_BASE}/characters/${characterId}/comics?ts=${timestamp}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}&limit=${API_CHARACTER_COMICS_LIMIT}`;

                const response = await fetch(characterComicsAPI);
                const responseToJson = await response.json();

                const result = responseToJson.data.results.map((item) => {
                    return new ComicBook({
                        id: item.id,
                        title: item.title,
                        modified: item.modified
                    });
                });

                const sortedResult = sortDescByModifiedDate(result).slice(0, COMICS_LIMIT);

                return Promise.resolve(sortedResult);
            } catch (error) {
                return Promise.reject('getComicsByCharacterId error: ' + error);
            }
        };

        return {
            getCharacters,
            getCharacterById
        };
    };

    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();

                return instance;
            } else {
                return instance;
            }
        }
    };

})();

export default marvelService.getInstance();