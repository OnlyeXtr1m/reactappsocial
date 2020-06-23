import React from "react";
import {newPostActionCreator, newTextAreaActionCreator} from "../../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        postsTextArea: state.profilePage.postsTextArea
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(newPostActionCreator());
        },
        onNewTextInArea: (text) => {
            dispatch(newTextAreaActionCreator(text));
        }
    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;