import React from "react";
import s from "./Dialogs.module.css"
import MessagesContainer from "./Messages/MessagesContainer";
import UserDialogsContainer from "./UserDialogs/UserDialogsContainer";


const Dialogs = (props) => {

    return (<div>
            <div className={s.dialogs}>
                <div className={s.userDialog}>
                    <UserDialogsContainer store={props.store}/>
                </div>
                <div className={s.messages}>
                    <MessagesContainer store={props.store}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;