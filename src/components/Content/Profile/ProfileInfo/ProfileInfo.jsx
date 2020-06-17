import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (<div className={s.profileInfo}>
            <img className={s.ava}
                 src="https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"/>
            <h3><span>Haruha Nogidzava</span></h3>
        </div>
    );
};

export default ProfileInfo;