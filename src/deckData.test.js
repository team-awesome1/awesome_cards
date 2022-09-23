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
        function dealHand(numCards) {
            hand = deck.deal(numCards);
        }
        try {
            dealHand(53)
        } catch (err) {
            expect(err instanceof RangeError).toBeTruthy;
        }
        expect(dealHand(26)).not.toThrowError;
        expect(hand.length).toEqual(26);
        expect(Array.isArray(hand)).toBeTruthy;
        expect(deck.remaining).toEqual(26);
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