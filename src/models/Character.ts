import { ComicBook } from './ComicBook';

export class Character {

    id: number;
    name: string;
    description: string;
    thumbnail: string;
    comics: ComicBook[];

    /**
     *
     */
    constructor(options: Character) {
        this.id = options.id;
        this.name = options.name;
        this.description = options.description;
        this.thumbnail = options.thumbnail;
        this.comics = options.comics;
    }
}