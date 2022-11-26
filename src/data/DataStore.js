
//a datastore

let DataStore = {
    locations: [
        {
            id: 1,
            coordinates: {x: 10, y: 20},
            name: "Glaicer National Park",
            years: [
                {
                    year: "1800",
                    temprature: "70F",
                    image: "imageURL"
                },
                {
                    year: "1900",
                    temprature: "80F",
                    image: "imageURL"
                }
            ]
        },
        {
            id: 2,
            coordinates: {x: 15, y: 25},
            name: "Yellowstone National Park",
            years: [
                {
                    year: "1800",
                    temprature: "70F",
                    image: "imageURL"
                },
                {
                    year: "1900",
                    temprature: "80F",
                    image: "imageURL"
                }
            ]
        }
    ],
    modal: {},
    subscribers: [],
    subscribe: function(callback) {
        this.subscribers.push(callback);
    },
    updateSubscribers: function() {
        this.subscribers.forEach((callback) => {
            callback();
        });
    },
    updateModal: function(location) {
        this.modal = location;
        this.updateSubscribers();
    },








    // curCard: 0,
    // subscribers: [],
    // view: <Results />,
    // setView: function (view) {

    //     this.view = view;
    //     this.updateSubscribers();
    // },
    // subscribe: function (callback) {
    //     this.subscribers.push(callback);
    // },
    // updateSubscribers: function () {
    //     this.subscribers.forEach((callback) => {
    //         callback();
    //     });
    // },
    // nextCard: function () {
    //     this.curCard = this.curCard + 1;
    //     this.updateSubscribers();
    // },
    // sortCards: function () {
    //     this.cardsBank = [...this.cardsBank.sort((a, b) => a.mastery - b.mastery)];
    //     this.curCard = 0;
    //     this.updateSubscribers();
    // },
    // forgottenMastery: function () {
    //     let unusedCards = this.cardsBank.slice(5);
    //     unusedCards.forEach(card => {
    //         card.updateMastery(.9);
    //     });
    // }



}

export { DataStore };