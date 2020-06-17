import React from "react";
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.author}>
                <b>{ props.name }</b>
            </div>
            <div className={s.innerpost}>
                { props.message }
            </div>
            <div className={s.likes}>
                Like - {props.likes}
            </div>
        </div>
    );
};

export default Post;