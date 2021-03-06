import React from "react";
import styles from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../../assets/user.jpg"

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {props.setUsers(response.data.items)})
    }
    return <div className={styles.users}>
        {
            props.users.map(u => <div key={u.id} className={styles.usersList}>
            <span>
                <div>
                    <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.avatar}/>
                </div>
                <div>
                    { u.followed
                        ? <button className={styles.button} onClick={ () => { props.unfollow(u.id) }} >Unfollow</button>
                        : <button className={styles.button} onClick={ () => { props.follow(u.id) }} >Follow</button>}
                </div>
            </span>
                <span className={styles.information}>
                    <span className={styles.name_and_status}>
                        <div>{u.name}</div>
                        <div className={styles.status}>{u.status}</div>
                    </span>
                        <div className={styles.location}>
                            {'u.location.country'}, {'u.location.city'}
                        </div>

                </span>
            </div>)
        }
    </div>
};

export default Users