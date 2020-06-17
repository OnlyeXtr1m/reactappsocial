import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (<nav className={s.nav}>
        <ul className={s.item}>
            <li><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></li>
            <li><NavLink to="/messages" activeClassName={s.activeLink}>Messages</NavLink></li>
            <li><NavLink to="/feed" activeClassName={s.activeLink}>Feed</NavLink></li>
            <li><NavLink to="/photos" activeClassName={s.activeLink}>Photos</NavLink></li>
        </ul>
    </nav>);
};

export default Nav;