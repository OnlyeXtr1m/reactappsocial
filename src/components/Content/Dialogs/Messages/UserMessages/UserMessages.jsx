import React from "react";
import s from "./../../Dialogs.module.css"


const UserMessages = (props) => {
    return (
        <div className={s.messageuser}>
            {props.message}
            {props.dateTime}
        </div>
    );
};

export default UserMessages;