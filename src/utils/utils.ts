import { ComicBook } from 'src/models/ComicBook';

export function sortDescByModifiedDate(items: ComicBook[]) {

    const sortedList = items.sort((a, b) => new Date(b.modified).getTime() - new Date(a.modified).getTime());
    return sortedList;
}