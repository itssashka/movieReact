import React from "react";
import st from "./BurgerMenu.module.css";

const BurgerMenu = () => {
    return (
        <div className={st.container}>
            <span className={st.burger}></span>
        </div>
    );
};

export default BurgerMenu;
