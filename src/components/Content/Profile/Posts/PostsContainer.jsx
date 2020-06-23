import React from "react";
import {newPostActionCreator, newTextAreaActionCreator} from "../../../../redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(newPostActionCreator());
    };

    let newTextInArea = (text) => {
        props.store.dispatch(newTextAreaActionCreator(text));
    };

    return (<Posts onAddPost={addPost} onNewTextInArea={newTextInArea} postsData={props.store.getState().profilePage.postsData} postsTextArea={props.store.getState().profilePage.postsTextArea} />
    );
};

export default PostsContainer;