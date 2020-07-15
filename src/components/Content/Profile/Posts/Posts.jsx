import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = (props) => {

    let newPostElement = React.createRef();

    let postsElements = props.postsData.map ( post => <Post name={post.name} message={post.message} likes={post.likesCount} />);

    let newTextInArea = () => {
        props.onNewTextInArea(newPostElement.current.value);
    };

    let addPost = () =>{
        props.onAddPost();
    }

    return(<div className={s.posts}>
            <div>
                <textarea onChange={newTextInArea} ref={newPostElement} value={props.postsTextArea} placeholder="Enter your message here"></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElements}
        </div>
    );
};

export default Posts;