import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
    return <div className={styles.users}>
        {
            props.users.map(u => <div key={u.id} className={styles.usersList}>
            <span>
                <div>
                    <img src={u.avatar} className={styles.avatar}/>
                </div>
                <div>
                    { u.followed
                        ? <button className={styles.button} onClick={ () => { props.unfollow(u.id) }} >Unfollow</button>
                        : <button className={styles.button} onClick={ () => { props.follow(u.id) }} >Follow</button>}
                </div>
            </span>
                <span className={styles.information}>
                    <span className={styles.name_and_status}>
                        <div>{u.fullName}</div>
                        <div className={styles.status}>{u.status}</div>
                    </span>
                        <div className={styles.location}>
                            {u.location.country}, {u.location.city}
                        </div>

                </span>
            </div>)
        }
    </div>
};

export default Users