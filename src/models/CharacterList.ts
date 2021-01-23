import { Character } from './Character';

export class CharacterList {

    total: number;
    characters: Character[];

    /**
     *
     */
    constructor(options: CharacterList) {
        this.total = options.total;
        this.characters = options.characters;
    }
}