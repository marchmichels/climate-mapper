//a datastore used to manage application state
let DataStore = {

    locations: [],              //an array of data objects
    modal: {},                  //a single data object
    subscribers: [],            //an array of functions to callback

    //add functions to subscribers array
    subscribe: function (callback) {
        this.subscribers.push(callback);
    },

    //callback all functions in the subscribers array
    updateSubscribers: function () {
        this.subscribers.forEach((callback) => {
            callback();
        });
    },

    //updates the modal property with a data object
    updateModal: function (location) {
        this.modal = location;
        this.updateSubscribers();
    },

    //hydrate datastore from fake API JSON response
    fetchData: function () {
        fetch("./fake_api/data.json")
            .then(res => res.json())
            .then((result) => {
                this.locations = result;
            });
    }

}

export { DataStore };