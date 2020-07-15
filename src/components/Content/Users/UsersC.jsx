import React from "react";
import styles from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../../assets/user.jpg"

class User extends React.Component {

    render() {

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

}

export default Users