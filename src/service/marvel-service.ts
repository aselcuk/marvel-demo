import md5 from 'md5';

const marvelService = (function () {
    let instance;

    const API_BASE = 'https://gateway.marvel.com/v1/public';
    const API_ITEM_LIMIT = 30;

    const timestamp = new Date().getTime();
    const MARVEL_PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
    const MARVEL_PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;

    const hash = md5(timestamp + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY);


    const createInstance = () => {

        const getCharacters = async () => {
            const charactersAPI = `${API_BASE}/characters?ts=${timestamp}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}&limit=${API_ITEM_LIMIT}`;

            const response = await fetch(charactersAPI);
            const data = response.json();

            return data;
        };

        return {
            getCharacters
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