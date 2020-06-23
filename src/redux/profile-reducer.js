const ADD_POST = "ADD-POST";
const UPDATE_TEXT_IN_AREA = "UPDATE-TEXT-IN-AREA";

let initialState = {
            postsData: [
                {id: 1, name: "Vova", message: "HELLO", likesCount: 10},
                {id: 2, name: "Vasya", message: "NICE", likesCount: 10},
                {id: 3, name: "Petya", message: "PERFECT", likesCount: 10}
            ],
            postsTextArea: ""
};

const profileReducer = (state = initialState, action) =>{

    switch (action.type) {
        case ADD_POST:{
            let newPost = {
            id: 5,
            name: "Vova",
            message: state.postsTextArea,
            likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.postsTextArea = "";
            return stateCopy;}

        case UPDATE_TEXT_IN_AREA:{
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsTextArea = action.text;
            return stateCopy;}

        default:
            return state;

    }

};

export const newPostActionCreator = () => ({ type: ADD_POST });

export const newTextAreaActionCreator = (text) => ({ type: UPDATE_TEXT_IN_AREA, text: text });

export default profileReducer;