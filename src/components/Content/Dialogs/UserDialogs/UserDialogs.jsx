import React from "react";
import Dialog from "./Dialog/Dialog";


const UserDialogs = (props) => {

    let usersElements = props.usersData.map( users => <Dialog id={users.id} name={users.name} />);

    return (<div>
            {usersElements}
    </div>
);
};

export default UserDialogs