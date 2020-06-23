import React from "react";
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import MessagesContainer from "./Messages/MessagesContainer";


const Dialogs = (props) => {

    let usersElements = props.store.getState().messagesPage.usersData.map( users => <Dialog id={users.id} name={users.name} />);

    return (<div>
            <div className={s.dialogs}>
                <div className={s.userDialog}>
                    {usersElements}
                </div>
                <div className={s.messages}>
                    <MessagesContainer store={props.store}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;