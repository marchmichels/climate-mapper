
//a datastore

let DataStore = {
    locations: [],
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
    fetchData: function() {
        console.log("fetched");

        fetch("./api/data.json")
        .then(res => res.json())
        .then((result) => {
            this.locations = result;
        });

    }








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