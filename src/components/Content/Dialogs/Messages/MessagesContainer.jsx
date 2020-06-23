import React from "react";
import {newMessageAreaActionCreator, newMessageSentActionCreator} from "../../../../redux/dialogs-reducer";
import Messages from "./Messages";



const MessagesContainer = (props) => {

    let addMessage = () => {
        props.store.dispatch(newMessageSentActionCreator());
    };

    let changeMessageText = (text) => {
        props.store.dispatch(newMessageAreaActionCreator(text));
    };

    return (<Messages onChangeMessageText={changeMessageText}
                      onAddMessage={addMessage}
                      state={props.store.getState().messagesPage.messagesData}/>
    );
};

export default MessagesContainer;