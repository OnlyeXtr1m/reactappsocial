import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (<div className={s.profileInfo}>
            <img className={s.ava}
                 src="https://avatarfiles.alphacoders.com/177/177216.png"/>
            <h3><span>Saitama Saitama</span></h3>
        </div>
    );
};

export default ProfileInfo;