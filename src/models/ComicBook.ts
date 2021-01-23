export class ComicBook {
    id: number;
    title: string;
    modified: string;

    /**
     *
     */
    constructor(options: ComicBook) {
        this.id = options.id;
        this.title = options.title;
        this.modified = options.modified;
    }
}