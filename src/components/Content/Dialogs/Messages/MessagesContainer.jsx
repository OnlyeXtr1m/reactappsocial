import React from "react";
import {newMessageAreaActionCreator, newMessageSentActionCreator} from "../../../../redux/dialogs-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        messagesData: state.messagesPage.messagesData
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        onChangeMessageText: (text) => {
            dispatch(newMessageAreaActionCreator(text));
        },
        onAddMessage: () => {
            dispatch(newMessageSentActionCreator());
        }
    }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;