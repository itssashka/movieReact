import React from "react";
import st from "./NavMenu.module.css";
import NavMenuSVG from "./NavMenuSVG";
import { Link } from "react-router-dom";

const NavMenu = () => {
    return (
        <>
            <span className={st.burger}></span>
            <div className={st.nav_menu}>
                <Link to="/top250" className={st.nav_item}>
                    <NavMenuSVG name="cupSVG" />
                    ТОП-250
                </Link>
                <Link href="#" className={st.nav_item}>
                    <NavMenuSVG name="windowSVG" />
                    Сериалы
                </Link>
                <Link href="#" className={st.nav_item}>
                    <NavMenuSVG name="fireSVG" />
                    Смотрят сейчас
                </Link>
            </div>
        </>
    );
};

export default NavMenu;
