import React from "react";
import s from "./../../Dialogs.module.css"


const CompanionMessages = (props) => {
    return (
        <div className={s.messagecompanion}>
            {props.message}
            {props.dateTime}
        </div>

    );
};

export default CompanionMessages;