import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (<div className={s.content}>
        <img className={s.background}
             src="https://3.bp.blogspot.com/-g31_rqzTK6Y/XIkaFZH8zNI/AAAAAAAAAgo/TxT0I8EQ4asm0D39LHwDPVOof7FiyeSVACKgBGAs/w3840-h1080-p-k-no-nu/sky-city-scenery-horizon-landscape-anime-uhdpaper.com-8K-131.jpg"/>
        <ProfileInfo/>
        <PostsContainer store={props.store} />
    </div>);
};

export default Profile;