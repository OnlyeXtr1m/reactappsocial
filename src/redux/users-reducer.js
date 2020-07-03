const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
        {id: 1, avatar: "https://avatarfiles.alphacoders.com/121/thumb-121911.jpg", fullName: "Vova", followed: true, status: "FUCK", location: {city: "Minsk", country: "Belarus"}},
        {id: 2, avatar: "https://avatarfiles.alphacoders.com/121/thumb-121911.jpg", fullName: "Vasya", followed: false, status: "YEAH", location: {city: "Moscow", country: "Russia"}},
        {id: 3, avatar: "https://avatarfiles.alphacoders.com/121/thumb-121911.jpg", fullName: "Petya", followed: true, status: "OLOLO", location: {city: "Volkovysk", country: "Belarus"}},
        {id: 4, avatar: "https://sun9-24.userapi.com/c854524/v854524508/ba0bb/_Lw6nlLTin8.jpg", fullName: "Nastya <3", followed: false, status: "<3 <3 <3", location: {city: "Krasnoyarsk", country: "Russia"}}
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })};}

        case UNFOLLOW:{
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })};}

        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }

};


export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;