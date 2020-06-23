import React from "react";
import s from "./../Dialogs.module.css"
import UserMessages from "./UserMessages/UserMessages";
import CompanionMessages from "./CompanionMessages/CompanionMessages";
import {newMessageAreaActionCreator, newMessageSentActionCreator} from "../../../../redux/dialogs-reducer";



const Messages = (props) => {

    let newMessageElement = React.createRef();

    let changeMessageText = () => {
        props.onChangeMessageText(newMessageElement.current.value);
    };

    let addMessage = () => {
        props.onAddMessage()
    }

    let userMessagesElements = props.state.messagesUser.map( message => <UserMessages id={message.id} message={message.message} dateTime = {message.pubDate}/>)
    let companionMessagesElements = props.state.messagesCompanion.map( message => <CompanionMessages id={message.id} message={message.message} dateTime = {message.pubDate}/>)

    return (
        <div className={s.message}>
            {userMessagesElements}
            {companionMessagesElements}
            <textarea onChange={changeMessageText} ref={newMessageElement} value={props.state.messagesTextArea}></textarea>
            <button onClick={ addMessage }>Add message</button>
        </div>
    );
};

export default Messages;