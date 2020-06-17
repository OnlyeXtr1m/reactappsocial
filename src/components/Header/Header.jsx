import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return(<header className={s.header}>
        <NavLink to="/profile"><img className={s.logo} src = "https://yt3.ggpht.com/a/AATXAJypWjArwe1Ab5LeR2SvRmmQ1_SyxDUAgcetSQ=s100-c-k-c0xffffffff-no-rj-mo"/></NavLink>
    </header>);
};

export default Header