
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
        //console.log("fetched");

        fetch("./api/data.json")
        .then(res => res.json())
        .then((result) => {
            this.locations = result;
        });

    }



}

export { DataStore };