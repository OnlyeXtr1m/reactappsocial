import React from "react";
import {connect} from "react-redux";
import UserDialogs from "./UserDialogs";

const mapStateToProps = (state) => {
    return {
       usersData: state.messagesPage.usersData
    }
}

const UserDialogsContainer = connect(mapStateToProps)(UserDialogs)

export default UserDialogsContainer