const {cards, shuffledCards, shuffle} = require('./cards');

// Updated test case with a Link to a different address
describe('Cards', () => {
    //
    it('generates full deck', () => {
        // sanity check
        expect(cards.length).toBe(52);
        // should always generate the same result
        expect(JSON.stringify(cards)).toMatchSnapshot();
    });

    //
    it('shuffles randomly', () => {
        const deck1 = shuffledCards();
        const deck2 = shuffledCards();

        expect(JSON.stringify(deck1))
        .not.toBe(JSON.stringify(deck2))
    });

    //
    it('shuffle maintains full deck', () => {
        expect(JSON.stringify(cards.sort()))
        .toBe(JSON.stringify(cards.sort(shuffle).sort()));
    });

});
