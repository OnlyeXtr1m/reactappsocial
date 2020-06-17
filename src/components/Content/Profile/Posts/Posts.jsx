import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";
import {newPostActionCreator, newTextAreaActionCreator} from "../../../../redux/profile-reducer";

const Posts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(newPostActionCreator());
    };

    let newTextInArea = () => {
        props.dispatch(newTextAreaActionCreator(newPostElement.current.value));
    };


    let postsElements = props.state.postsData.map ( post => <Post name={post.name} message={post.message} likes={post.likesCount} />);

    return(<div className={s.posts}>
            <div>
                <textarea onChange={newTextInArea} ref={newPostElement} value={props.state.postsTextArea}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElements}
        </div>
    );
};

export default Posts;