class Deck {
    constructor() {
        this.cards = ["AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "0S", "JS", "QS", "KS",
            "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "0D", "JD", "QD", "KD",
            "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "0C", "JC", "QC", "KC",
            "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "OH", "JH", "QH", "KH"] //value of 10 is given the code of 0 for indexing purposes
        this.shuffled = false;
        this.deck = this.cards.slice(0, this.cards.length); //property to keep track of deck that will change with gameplay. uses slice to create copy so that cards property is preserved
        this.remaining = this.deck.length;
    }

    shuffle() {
        const deck = this.deck;
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        this.shuffled = true;
        return deck;
        //source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    }

    draw() {
        if (!this.deck.length) {
            throw new RangeError("There are no more cards in the deck! Create a new deck instance or reset current.");
        }
        const card = this.deck.pop();
        this.remaining = this.deck.length--;
        return card
    }

    reset() {
        this.deck = this.cards.slice(0, this.cards.length);
        this.shuffled = false;
        this.remaining = this.deck.length;
    }
}