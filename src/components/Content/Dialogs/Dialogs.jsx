import React from "react";
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";


const Dialogs = (props) => {

    let usersElements = props.state.usersData.map( users => <Dialog id={users.id} name={users.name} />);

    return (<div>
            <div className={s.dialogs}>
                <div className={s.userDialog}>
                    {usersElements}
                </div>
                <div className={s.messages}>
                    <Messages state={props.state.messagesData} dispatch={props.dispatch}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;