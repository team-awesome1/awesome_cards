import Deck from './deckData'
let deck;
let hand;
function setUp() {
    deck = new Deck();
    hand = ['QD', '7D', '9D', '6S', 'KD', '9S', 'JC', 'QH', 'JD', 'AH', 'KH', '8D']
}

beforeAll(setUp);
afterEach(setUp)

describe("Tests deck class and methods", function () {
    test("initial set-up", function () {
        expect(deck.remaining).toEqual(52);
        expect(deck.shuffled).toEqual(false);
        expect(deck.deck.length).toEqual(52);
        expect(deck.cards.length).toEqual(52);
        expect(deck.deck).not.toBe(deck.cards); //ensures they aren't the same array in memory
    })
    test("deal method", function () {
        let hand;
        let hand2;
        function dealHand(numCards) {
            hand = deck.deal(numCards);
            hand2 = deck.deal(numCards)
        }
        try {
            dealHand(53)
        } catch (err) {
            expect(err instanceof RangeError).toBeTruthy; //checks that error is being thrown and error type is correct
        }
        expect(dealHand(26)).not.toThrowError;
        expect(hand.length).toEqual(26);
        expect(hand2.length).toEqual(26)
        expect(Array.isArray(hand)).toBeTruthy;
        expect(deck.remaining).toEqual(0);
        expect(hand.every((val, idx) => val === hand2[idx])).toBeFalsy //ensures that state of deck class was changed across draws, otherwise both hands would be identical
        function hasDuplicates(hand, hand2) {
            const array = hand.concat(hand2)
            return (new Set(array)).size !== array.length;
        }
        expect(hasDuplicates(hand, hand2)).toBeFalsy //ensures that there are no duplicate values at all
    })
    test("shuffle method", function () {
        const shuffled = deck.shuffle();
        const shuffledStr = shuffled.join(); //we must convert to string to compare
        const cardsStr = deck.cards.join();
        expect(shuffledStr).not.toEqual(cardsStr)
        expect(deck.shuffled).toBe(true);
    })
    test("draw method", function () {
        const drawnCard = deck.draw(hand);
        expect(drawnCard).toBeTruthy;
        expect(typeof drawnCard).toEqual("string");
        expect(drawnCard.length).toEqual(2);
    })
    test("reset method", function () {
        deck.reset();
        expect(deck.remaining).toEqual(52);
        expect(deck.shuffled).toEqual(false);
        expect(deck.deck.length).toEqual(52);
        expect(deck.cards.length).toEqual(52);
        expect(deck.deck).not.toBe(deck.cards); //ensures they aren't the same array in memory
    })
})