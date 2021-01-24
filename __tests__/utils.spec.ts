const { sortDescByModifiedDate } = require('src/utils/utils');

describe('sortDescByModifiedDate', () => {
    describe('when the character comics list is given', () => {

        const comicBookItems = [
            {
                id: 40628,
                title: 'Hulk (2008) #55',
                modified: '2012-06-19T11:48:47-0400'
            },
            {
                id: 40630,
                title: 'Hulk (2008) #54',
                modified: '2012-06-11T17:31:00-0400'
            },
            {
                id: 40632,
                title: 'Hulk (2008) #53',
                modified: '2012-06-12T15:18:39-0400'
            }
        ];

        const result = sortDescByModifiedDate(comicBookItems);

        it('should be sorted in descending order by date', () => {
            expect(result).toMatchSnapshot();
        });
    });
});