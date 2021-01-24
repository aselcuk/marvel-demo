global.fetch = require("node-fetch");
const marvelService = require('src/service/marvel-service');
const { API_CHARACTER_COMICS_LIMIT } = require('src/service/constants');

describe('getCharacters', () => {
    const page = 1;
    let response;

    beforeEach(async () => {
        response = await marvelService.default.getCharacters(page);
    });
    
    it('should return 30 characters or less', () => {
        expect(response.characters.length).toBeLessThanOrEqual(API_CHARACTER_COMICS_LIMIT);
    });

    it('should not to be null total item count', () => {
        expect(response.characters.total).not.toBeNull();
    });
});