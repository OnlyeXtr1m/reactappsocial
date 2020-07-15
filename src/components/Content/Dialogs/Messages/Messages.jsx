import React from "react";
import s from "./../Dialogs.module.css"
import UserMessages from "./UserMessages/UserMessages";
import CompanionMessages from "./CompanionMessages/CompanionMessages";




const Messages = (props) => {

    let newMessageElement = React.createRef();

    let changeMessageText = () => {
        props.onChangeMessageText(newMessageElement.current.value);
    };

    let addMessage = () => {
        props.onAddMessage()
    }

    let userMessagesElements = props.messagesData.messagesUser.map( message => <UserMessages id={message.id} message={message.message} dateTime = {message.pubDate}/>)
    let companionMessagesElements = props.messagesData.messagesCompanion.map( message => <CompanionMessages id={message.id} message={message.message} dateTime = {message.pubDate}/>)

    return (
        <div className={s.message}>
            {userMessagesElements}
            {companionMessagesElements}
            <textarea className={s.messagesTextArea} onChange={changeMessageText} ref={newMessageElement} value={props.messagesData.messagesTextArea}></textarea>
            <button className={s.buttonSendMessage} onClick={ addMessage }>Add message</button>
        </div>
    );
};

export default Messages;