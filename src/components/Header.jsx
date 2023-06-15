import React, { useContext } from "react";
import MyLogo from "./MyLogo/MyLogo";
import NavMenu from "./NavMenu/NavMenu";
import SearchField from "./SearchField/SearchField";
import LoginHeaderButton from "./LoginHeaderButton/LoginHeaderButton";
import AccountHeaderButton from "./AccountHeaderButton/AccountHeaderButton";
import { AuthContext } from "../context";
import BurgerMenu from "./UI/BurgerMenu/BurgerMenu";

const Header = () => {
    const { isAuth } = useContext(AuthContext);
    return (
        <div className="header">
            <div className="header_container">
                <MyLogo />
                <NavMenu />
                <SearchField />
                <div className="header_user">
                    {isAuth ? (
                        <AccountHeaderButton />
                    ) : (
                        <LoginHeaderButton />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
