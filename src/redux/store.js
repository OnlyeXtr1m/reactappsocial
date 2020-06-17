import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _callSubscriber() {
    console.log("Error render")
},

    _state: {
        messagesPage: {
            messagesData: {
                messagesUser: [
                    {id: 1, message: "Hi", pubDate: 1},
                    {id: 2, message: "HOPA", pubDate: 3}
                ],

                messagesCompanion: [
                    {id: 1, message: "Hey", pubDate: 2},
                    {id: 2, message: "HOBANA", pubDate: 4}
                ],

                messagesTextArea: ""
            },

            usersData: [
                {id: 1, name: "Vova"},
                {id: 2, name: "Vasya"},
                {id: 3, name: "Petya"},
                {id: 4, name: "Kolya"},
                {id: 5, name: "Jora"},
                {id: 6, name: "Tolya"}
            ],
        },
        profilePage: {
            postsData: [
                {id: 1, name: "Vova", message: "HELLO", likesCount: 10},
                {id: 2, name: "Vasya", message: "NICE", likesCount: 10},
                {id: 3, name: "Petya", message: "PERFECT", likesCount: 10}
            ],
            postsTextArea: ""
        }
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
    this._callSubscriber = observer;

},

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },

};


export default store;