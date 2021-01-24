global.fetch = require("node-fetch");
const marvelService = require('src/service/marvel-service');
const { API_CHARACTERS_LIMIT, SLICE_COMICS_LIMIT } = require('src/service/constants');


const page = 1;
let response;
let characterId;

beforeAll(async () => {

    response = await marvelService.default.getCharacters(page);

    characterId = response.characters[0].id;
});

describe('getCharacters', () => {
    describe('when api request is sent', () => {

        it('should return 30 characters or less', () => {
            expect(response.characters.length).toBeLessThanOrEqual(API_CHARACTERS_LIMIT);
        });

        it('should not to be null total item count', () => {
            expect(response.characters.total).not.toBeNull();
        });
    });
});

describe('getCharacterById', () => {
    describe('when api request is sent', () => {

        it('should not to be null', async () => {
            const result = await marvelService.default.getCharacterById(characterId);
            expect(result).not.toBeNull();
        });
    });
});

describe('getComicsByCharacterId', () => {
    describe('when api request is sent', () => {

        it('should return 10 comics or less', async () => {
            const result = await marvelService.default.getComicsByCharacterId(characterId);
            expect(result.length).toBeLessThanOrEqual(SLICE_COMICS_LIMIT);
        });
    });
});