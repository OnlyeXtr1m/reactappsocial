import React from "react";
import s from "./../Dialogs.module.css"
import UserMessages from "./UserMessages/UserMessages";
import CompanionMessages from "./CompanionMessages/CompanionMessages";
import {newMessageAreaActionCreator, newMessageSentActionCreator} from "../../../../redux/dialogs-reducer";



const Messages = (props) => {

    let NewMessageElement = React.createRef();
    let AddMessage = () => {
        props.dispatch(newMessageSentActionCreator());
    };

    let changeMessageText = () => {
        props.dispatch(newMessageAreaActionCreator(NewMessageElement.current.value));
    };

    let UserMessagesElements = props.state.messagesUser.map( message => <UserMessages id={message.id} message={message.message} dateTime = {message.pubDate}/>)
    let CompanionMessagesElements = props.state.messagesCompanion.map( message => <CompanionMessages id={message.id} message={message.message} dateTime = {message.pubDate}/>)

    return (
        <div className={s.message}>
            {UserMessagesElements}
            {CompanionMessagesElements}
            <textarea onChange={changeMessageText} ref={NewMessageElement} value={props.state.messagesTextArea}></textarea>
            <button onClick={ AddMessage }>Add message</button>
        </div>
    );
};

export default Messages;