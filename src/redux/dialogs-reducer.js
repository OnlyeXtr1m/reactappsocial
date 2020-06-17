const UPDATE_MESSAGE_IN_AREA = "UPDATE-MESSAGE-IN-AREA";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = { messagesData: {
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
    };

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE_IN_AREA:
            state.messagesData.messagesTextArea = action.text;
            return state;

        case ADD_MESSAGE:
            let newMessage = {
            id: 3,
            message: state.messagesData.messagesTextArea,
            pubDate: 5
             };
            state.messagesData.messagesUser.push(newMessage);
            state.messagesData.messagesTextArea = "";
            return state;

        default:
            return state;
    }

};

export const newMessageAreaActionCreator = (text) => ({ type: UPDATE_MESSAGE_IN_AREA, text: text});

export const newMessageSentActionCreator = () => ({ type: ADD_MESSAGE });

export default dialogsReducer;